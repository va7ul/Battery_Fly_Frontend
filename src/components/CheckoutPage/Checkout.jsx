import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { useFormik } from 'formik';
import { PersonalData } from './PersonalData/PersonalData';
import { Cart } from './Cart/Cart';
import { Delivery } from './Delivery/Delivery';
import { personalDataSchema } from 'common/schemas/personalDataSchema';
import { isPhoneValid } from 'common/schemas/phoneSchema';
import { selectItems, selectTotal } from '../../redux/basket/basketSelectors';
import {
  selectUserDataInOrder,
  selectCity,
  selectDeliveryType,
  selectPayment,
  selectWarehouse,
  selectOrderNum,
} from '../../redux/order/orderSelectors';
import { addOrder } from '../../redux/order/orderOperations';
import { changeOrderNum } from '../../redux/order/orderSlice';
import { ModalAgree } from 'components/Modals/SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from 'components/Modals/SharedComponent/Text/Text';
import { Title, Wrapper, OrderButton } from './Checkout.styled';

export const Checkout = () => {
  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);

  const { firstName, lastName, email, text, tel } = useSelector(
    selectUserDataInOrder
  );
  const orderNum = useSelector(selectOrderNum);
  const dispatch = useDispatch();
  const isValidPhone = isPhoneValid(tel);
  const total = useSelector(selectTotal);
  const cartItems = useSelector(selectItems);
  const city = useSelector(selectCity);
  const warehouse = useSelector(selectWarehouse);
  const payment = useSelector(selectPayment);
  const deliveryType = useSelector(selectDeliveryType);

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
        <Grid container>
          <Grid item desktop={6}>
            <PersonalData formik={formik} isValidPhone={isValidPhone} />
          </Grid>
          <Grid item desktop={6}>
            <Cart />
          </Grid>
          <Grid item desktop={6}>
            <Delivery />
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
