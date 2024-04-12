import { useState } from 'react';
import { Formik } from 'formik';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { isPhoneValid } from '../../../common/schemas/phoneSchema';
import { useMediaQuery } from 'react-responsive';

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
import { personalDataSchema } from 'common/schemas/personalDataSchema';

export const PersonalData = () => {
  const [tel, setTel] = useState('');

  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const isValidPhone = isPhoneValid(tel);

  return (
    <>
      <Wrapper>
        <Title>Особисті дані</Title>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            text: '',
          }}
          validationSchema={personalDataSchema}
          onSubmit={(values, actions) => {
            console.log('first');
          }}
        >
          <StyledForm>
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
                  '--react-international-phone-text-color':
                    'rgba(31, 31, 31, 1)',
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
                value={tel}
                onChange={tel => setTel(tel)}
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
            {/* <Btn type="submit" disabled={!isValidPhone || tel === '+380'}>
              <div></div>
            </Btn> */}
          </StyledForm>
        </Formik>
      </Wrapper>
      <PhoneFieldGlobalStyles />
    </>
  );
};