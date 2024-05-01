import { useState } from 'react';
import { useAuth } from 'utils/hooks';
import { useMediaQuery } from 'react-responsive';
import { Formik } from 'formik';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { userDataSchema } from 'common/schemas/userDataSchema';
import { isPhoneValid } from 'common/schemas/phoneSchema';
import { theme } from 'styles/GlobalStyled';
import {
  StyledForm,
  Label,
  StyledField,
  StyledErrorMessage,
  DivErrorMessage,
  FormikWrapper,
  PhoneFieldGlobalStyles,
  Box,
  BtnWrapper,
  SubmitUserDataBtn,
  CancelBtn,
} from './UserDataEditForm.styled';
import PasswordEditForm from '../PasswordEditForm/PasswordEditForm';

export const UserDataEditForm = ({ handleShowForm }) => {
  const isBigScreen = useMediaQuery({ query: '(min-width:1280px)' });

  const {
    userData: { firstName, lastName, patronymic, tel, email },
  } = useAuth();

  const [formikTel, setTel] = useState(tel);

  const isValidPhone = isPhoneValid(formikTel);

  return (
    <>
      <FormikWrapper>
        <Formik
          initialValues={{
            firstName: firstName,
            lastName: lastName,
            patronymic: patronymic,
            email: email,
            password: '',
          }}
          validationSchema={userDataSchema}
          onSubmit={(values, _) => {
            console.log('values', values);
          }}
        >
          <StyledForm>
            <Label>
              Ім'я
              <Box>
                <StyledField name="firstName" type="text" />
                <StyledErrorMessage name="firstName" component="div" />
              </Box>
            </Label>

            <Label>
              Прізвище
              <Box>
                <StyledField name="lastName" type="text" />
                <StyledErrorMessage name="lastName" component="div" />
              </Box>
            </Label>

            <Label>
              По батькові
              <Box>
                <StyledField name="patronymic" type="text" />
                <StyledErrorMessage name="patronymic" component="div" />
              </Box>
            </Label>
            <Label>
              Мобільний номер
              <Box>
                <PhoneInput
                  style={{
                    '--react-international-phone-height': !isBigScreen
                      ? '22px'
                      : '34px',
                    '--react-international-phone-background-color':
                      'transparent',
                    '--react-international-phone-border-color': `${theme.colors.greyOutput}`,
                    '--react-international-phone-text-color': `${theme.colors.greyOutput}`,
                    '--react-international-phone-font-size': !isBigScreen
                      ? '10px'
                      : '15px',
                    '--react-international-phone-border-radius': '8px',
                    '--react-international-phone-flag-width': !isBigScreen
                      ? '16px'
                      : '24px',
                    '--react-international-phone-flag-height': !isBigScreen
                      ? '16px'
                      : '24px',
                  }}
                  defaultCountry="ua"
                  hideDropdown={true}
                  value={formikTel}
                  onChange={formikTel => setTel(formikTel)}
                />
                {!isValidPhone && (
                  <DivErrorMessage>
                    Введіть свій номер телефону, будь ласка
                  </DivErrorMessage>
                )}
              </Box>
            </Label>

            <Label>
              Email
              <Box>
                <StyledField name="email" type="text" />
                <StyledErrorMessage name="email" component="div" />
              </Box>
            </Label>

            <Label>
              Пароль
              <Box>
                <StyledField name="password" type="password" />
                <StyledErrorMessage name="password" component="div" />
              </Box>
            </Label>
            <BtnWrapper>
              <SubmitUserDataBtn
                type="submit"
                disabled={!isValidPhone || tel === '+380'}
              >
                Зберегти дані
              </SubmitUserDataBtn>
              <CancelBtn type="button" onClick={handleShowForm}>
                Відмінити
              </CancelBtn>
            </BtnWrapper>
          </StyledForm>
        </Formik>
        <PhoneFieldGlobalStyles />
      </FormikWrapper>
      <PasswordEditForm />
    </>
  );
};
