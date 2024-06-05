import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';
import { useFormik } from 'formik';
import toast from 'react-hot-toast';
import { useAuth, useOrder } from 'utils/hooks';
import { PersonalData } from './PersonalData/PersonalData';
import { Delivery } from './Delivery/Delivery';
import { Cart } from './Cart/Cart';
import { TotalPrice } from './TotalPrice/TotalPrice';
import { personalDataSchema } from 'common/schemas/personalDataSchema';
import { isPhoneValid } from 'common/schemas/phoneSchema';
import { addOrder } from '../../redux/order/orderOperations';
import {
  changeOrderNum,
  changeUserComment,
  changeUserTel,
} from '../../redux/order/orderSlice';
import { clearBasket } from '../../redux/basket/basketSlice';
import { ModalAgree } from 'components/Modals/SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from 'components/Modals/SharedComponent/Text/Text';
import { theme } from 'styles/GlobalStyled';
import { Title, Wrapper, OrderButton } from './Checkout.styled';

export const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);

  const { isLoggedIn, userData: { firstName, lastName, email} } = useAuth();
  const {
    text,
    tel,
    orderNum,
    total,
    promoCode,
    promoCodeDiscount,
    discountValue,
    together,
    cartItems,
    city,
    warehouse,
    payment,
    deliveryType,
  } = useOrder();

  const isValidPhone = isPhoneValid(tel);

  useEffect(() => {
    if (orderNum) {
      handleOpenAgreeModal();
    }
  }, [orderNum]);

  const handleOpenAgreeModal = () => {
    setIsModalAgreeOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseAgreeModal = () => {
    setIsModalAgreeOpen(false);
    dispatch(changeOrderNum(''));
    document.body.style.overflow = 'unset';
    navigate('/main');
  };

  const formik = useFormik({
    initialValues: {
      firstName: isLoggedIn ? firstName : '',
      lastName: isLoggedIn ? lastName : '',
      email: isLoggedIn ? email : '',
      text: text,
    },
    validationSchema: personalDataSchema,
    onSubmit: (values, _) => {
      const userData = {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        tel: tel,
        email: values.email,
        text: values.text,
      };
      const orderData = {
        userData: userData,
        total,
        promoCode,
        promoCodeDiscount,
        discountValue,
        together,
        cartItems,
        deliveryType,
        city,
        warehouse,
        payment,
      };
      dispatch(changeUserComment(orderData.userData.text));
      if (!isValidPhone || tel === '+380' || !city || !payment) {
        toast('Введіть особисті дані, спосіб доставки і спосіб оплати.', {
          icon: '👀',
          duration: 5000,
          style: {
            borderRadius: '10px',
            background: `${theme.colors.secondary}`,
            color: `${theme.colors.textPrimary}`,
          },
        });
      } else {
        dispatch(addOrder(orderData)).then(result => {
          if (result.meta.requestStatus === 'fulfilled') {
            dispatch(clearBasket());
            dispatch(changeUserComment(''));
            dispatch(changeUserTel(''));
          }
        });
      }
    },
  });

  return (
    <>
      <Wrapper>
        <Title>Оформлення замовлення</Title>
        <Grid container rowGap="15px">
          <Grid item desktop={6}>
            <PersonalData formik={formik} isValidPhone={isValidPhone} />
            <Delivery />
          </Grid>
          <Grid item desktop={6}>
            <Cart />
            <TotalPrice />
          </Grid>
        </Grid>
        <OrderButton type="submit" form="form-order">
          Оформити замовлення
        </OrderButton>
      </Wrapper>
      <ModalAgree
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAgreeModal}
        buttonText="На головну сторінку"
      >
        <TextAgree>Ваш номер замовлення {orderNum}.</TextAgree>
        <TextAgree>Очікуйте на дзвінок від менеджера.</TextAgree>
      </ModalAgree>
    </>
  );
};
