import { FC, useEffect } from 'react';
import { useTypedDispatch } from '../../../redux/hooks/hooks';
import { useMediaQuery } from 'react-responsive';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useAuth, useOrder } from 'utils/hooks';
import { changeUserTel } from '../../../redux/order/orderSlice';
import { theme } from 'styles/theme';
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
import { UserData } from '../../../@types/user.types';

type FormValues = Omit<UserData, 'tel' | 'patronymic'> & { text: string };

type FormProps = {
  formik: {
    initialValues: FormValues;
    values: FormValues;
    handleSubmit: () => void;
  };
};

type OtherProps = {
  isValidPhone: boolean;
};

export const PersonalData: FC<FormProps & OtherProps> = ({
  formik,
  isValidPhone,
}) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const {
    isLoggedIn,
    userData: { firstName, lastName, email, tel: userTel },
  } = useAuth();
  const { tel } = useOrder();

  const dispatch = useTypedDispatch();

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(changeUserTel(userTel));
      formik.initialValues.firstName = firstName;
      formik.initialValues.lastName = lastName;
      formik.initialValues.email = email;
    }
    if (!isLoggedIn) {
      dispatch(changeUserTel('+380'));
      formik.initialValues.firstName = '';
      formik.initialValues.lastName = '';
      formik.initialValues.email = '';
    }
  }, [
    dispatch,
    isLoggedIn,
    userTel,
    formik.initialValues,
    firstName,
    lastName,
    email,
  ]);

  return (
    <>
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
              style={
                {
                  '--react-international-phone-height': !isBigScreen
                    ? '39px'
                    : '51px',
                  '--react-international-phone-background-color': 'transparent',
                  '--react-international-phone-border-color': `${theme.colors.textDisabled}`,
                  '--react-international-phone-text-color': `${theme.colors.textPrimary}`,
                  '--react-international-phone-font-size': !isBigScreen
                    ? '10px'
                    : '20px',
                  '--react-international-phone-border-radius': !isBigScreen
                    ? '8px'
                    : '8px',
                  '--react-international-phone-flag-width': !isBigScreen
                    ? '16px'
                    : '24px',
                  '--react-international-phone-flag-height': !isBigScreen
                    ? '16px'
                    : '24px',
                } as React.CSSProperties
              }
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
            <StyledField
              name="email"
              type="text"
              value={formik.values.email}
            />
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
    </>
  );
};
