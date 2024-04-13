import { Grid } from '@mui/material';
import { PersonalData } from './PersonalData/PersonalData';
import { Cart } from './Cart/Cart';
import { Delivery } from './Delivery/Delivery';
import { Title, Wrapper } from './Checkout.styled';
import { OrderButton } from './Delivery/Delivery.styled';
import { useFormik } from 'formik';
import { useState } from 'react';
import { personalDataSchema } from 'common/schemas/personalDataSchema';
import { isPhoneValid } from 'common/schemas/phoneSchema';
import { selectItems, selectTotal } from '../../redux/basket/basketSelectors';
import { useSelector } from 'react-redux';

export const Checkout = () => {
  const [tel, setTel] = useState('');
  const isValidPhone = isPhoneValid(tel);
  const total = useSelector(selectTotal);
  const cartItems = useSelector(selectItems);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      text: '',
    },
    validationSchema: personalDataSchema,
    onSubmit: (values, _) => {
      console.log('values', values, tel, total, cartItems);
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
            tel={tel}
            setTel={setTel}
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
