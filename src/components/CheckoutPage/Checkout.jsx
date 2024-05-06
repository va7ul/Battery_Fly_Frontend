import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Grid } from '@mui/material';
import { useFormik } from 'formik';
import { PersonalData } from './PersonalData/PersonalData';
import { Delivery } from './Delivery/Delivery';
import { Cart } from './Cart/Cart';
import { TotalPrice } from './TotalPrice/TotalPrice';
import { personalDataSchema } from 'common/schemas/personalDataSchema';
import { isPhoneValid } from 'common/schemas/phoneSchema';
import { addOrder } from '../../redux/order/orderOperations';
import { changeOrderNum } from '../../redux/order/orderSlice';
import { ModalAgree } from 'components/Modals/SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from 'components/Modals/SharedComponent/Text/Text';
import { Title, Wrapper, OrderButton } from './Checkout.styled';
import { useOrder } from 'utils/hooks';

export const Checkout = () => {
  const dispatch = useDispatch();
  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);

  const {
    firstName,
    lastName,
    email,
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
  };

  const formik = useFormik({
    initialValues: {
      firstName: firstName,
      lastName: lastName,
      email: email,
      text: text,
    },
    validationSchema: personalDataSchema,
    onSubmit: (values, _) => {
      const orderData = {
        userData: { ...values, tel },
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
      console.log(orderData);
      dispatch(addOrder(orderData));
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
        <OrderButton
          type="submit"
          form="form-order"
          disabled={!isValidPhone || tel === '+380'}
        >
          Оформити замовлення
        </OrderButton>
      </Wrapper>
      <ModalAgree
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAgreeModal}
      >
        <TextAgree>Ваш номер замовлення {orderNum}.</TextAgree>
        <TextAgree>Очікуйте на дзвінок від менеджера.</TextAgree>
      </ModalAgree>
    </>
  );
};
