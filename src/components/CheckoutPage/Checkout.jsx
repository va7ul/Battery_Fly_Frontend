import { Grid } from '@mui/material';
import { PersonalData } from './PersonalData/PersonalData';
import { Cart } from './Cart/Cart';
import { Delivery } from './Delivery/Delivery';
import { Title, Wrapper } from './Checkout.styled';
import { OrderButton } from './Delivery/Delivery.styled';
import { useFormik } from 'formik';
import { personalDataSchema } from 'common/schemas/personalDataSchema';
import { isPhoneValid } from 'common/schemas/phoneSchema';
import { selectItems, selectTotal } from '../../redux/basket/basketSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { selectUserDataInOrder } from '../../redux/order/orderSelectors';
import { addOrder } from '../../redux/order/orderOperations';

export const Checkout = () => {
  const { firstName, lastName, email, text, tel } = useSelector(
    selectUserDataInOrder
  );
   const dispatch = useDispatch();
  const isValidPhone = isPhoneValid(tel);
  const total = useSelector(selectTotal);
  const cartItems = useSelector(selectItems);

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
      };
      dispatch(addOrder(orderData));
      //  if (response) {
      //    handleOpenAgreeModal();
      //  }
    },
  });

  return (
    <Wrapper>
      <Title>Оформлення замовлення</Title>
      <Grid container>
        <Grid item desktop={6}>
          <PersonalData
            formik={formik}
            isValidPhone={isValidPhone}
          />
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
        <div>Оформити замовлення</div>
      </OrderButton>
    </Wrapper>
  );
};
