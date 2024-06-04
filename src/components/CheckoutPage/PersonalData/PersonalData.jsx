import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { FormikProvider } from 'formik';
import { useMediaQuery } from 'react-responsive';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useAuth, useOrder } from 'utils/hooks';
import { changeUserTel } from '../../../redux/order/orderSlice';
import {
  DivErrorMessage,
  Label,
  LabelText,
  PhoneFieldGlobalStyles,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledTextField,
  Title,
  Wrapper,
} from './PersonalData.styled';

export const PersonalData = ({ formik, isValidPhone }) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });

  const {
    isLoggedIn,
    userData: { tel: userTel },
  } = useAuth();
  const { tel } = useOrder();

  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(changeUserTel(userTel));
    }
    if (!isLoggedIn) {
      dispatch(changeUserTel('+380'));
    }
  }, [dispatch, isLoggedIn, userTel]);

  return (
    <FormikProvider value={formik}>
      <Wrapper>
        <Title>Особисті дані</Title>
        <StyledForm onSubmit={formik.handleSubmit} id="form-order">
          <Label>
            <LabelText>Ім'я</LabelText>
            <StyledField name="firstName" type="text" />
            <StyledErrorMessage name="firstName" component="div" />
          </Label>

          <Label>
            <LabelText>Прізвище</LabelText>
            <StyledField name="lastName" type="text" />
            <StyledErrorMessage name="lastName" component="div" />
          </Label>

          <Label>
            <LabelText>Телефон</LabelText>
            <PhoneInput
              style={{
                '--react-international-phone-height': !isBigScreen
                  ? '39px'
                  : '51px',
                '--react-international-phone-background-color': 'transparent',
                '--react-international-phone-border-color':
                  'rgba(157, 157, 157, 1)',
                '--react-international-phone-text-color': 'rgba(31, 31, 31, 1)',
                '--react-international-phone-font-size': !isBigScreen
                  ? '10px'
                  : '14px',
                '--react-international-phone-border-radius': !isBigScreen
                  ? '8px'
                  : '8px',
                '--react-international-phone-flag-width': !isBigScreen
                  ? '16px'
                  : '24px',
                '--react-international-phone-flag-height': !isBigScreen
                  ? '16px'
                  : '24px',
              }}
              defaultCountry="ua"
              hideDropdown={true}
              value={isLoggedIn ? userTel : tel}
              onChange={tel => {
                if (tel !== '+380') {
                  dispatch(changeUserTel(tel));
                }
              }}
            />
            {!isValidPhone && (
              <DivErrorMessage>
                Введіть свій номер телефону, будь ласка
              </DivErrorMessage>
            )}
          </Label>

          <Label>
            <LabelText>E-пошта</LabelText>
            <StyledField name="email" type="text" />
            <StyledErrorMessage name="email" component="div" />
          </Label>

          <Label>
            Коментар
            <StyledTextField
              component="textarea"
              name="text"
              type="text"
              placeholder="Введіть текст"
            />
            <StyledErrorMessage name="text" component="div" />
          </Label>
        </StyledForm>
      </Wrapper>
      <PhoneFieldGlobalStyles />
    </FormikProvider>
  );
};
