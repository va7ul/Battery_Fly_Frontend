import { SideBarNav } from 'components/Shared/SideBarNav/SideBarNav';
import {
  Wrapper,
  Title,
  StyledForm,
  Label,
  StyledField,
  StyledErrorMessage,
  DivErrorMessage,
  FormikWrapper,
  PhoneFieldGlobalStyles,
  Box,
  BtnWrapper,
  EditButton,
  SubmitUserDataBtn,
  CancelBtn,
} from './UserProfile.styled';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useAuth } from 'utils/hooks';
import { useMediaQuery } from 'react-responsive';

import { LiaPenAltSolid } from 'react-icons/lia';
import { Formik } from 'formik';

import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useState } from 'react';
import { isPhoneValid } from 'common/schemas/phoneSchema';
// import { theme, themeMUI } from '../../styles/GlobalStyled';
import { userDataSchema } from 'common/schemas/userDataSchema';
import { theme } from 'styles/GlobalStyled';

export const UserProfile = () => {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => setShowForm(!showForm);
  const isBigScreen = useMediaQuery({ query: '(min-width:1280px)' });
  const {
    userData: { firstName, lastName, patronymic, tel, email },
  } = useAuth();

  const [formikTel, setTel] = useState(tel);
  const isValidPhone = isPhoneValid(formikTel);

  function createData(userData, value) {
    return { userData, value };
  }

  const rows = [
    createData('Ім’я', firstName),
    createData('Прізвище', lastName),
    createData('По батькові', patronymic),
    createData('Мобільний номер', tel),
    createData('Email', email),
    createData('Пароль', '*********'),
  ];

  return (
    <Wrapper>
      {isBigScreen && <SideBarNav />}
      <div>
        <Title>Користувач</Title>
        {!showForm && (
          <TableContainer
            component={Paper}
            sx={{
              backgroundColor: themeMUI => themeMUI.palette.background.default,
              boxShadow:
                '1px 0px 0px 0px rgba(0, 0, 0, 0.14),0px 0px 1px 0px rgba(0, 0, 0, 0.14),0px 1px 0px 0px rgba(0, 0, 0, 0.14)',
            }}
          >
            <Table sx={{ minWidth: 175 }} aria-label="user data table">
              <TableBody
                sx={{
                  'tr:nth-child(odd)': {
                    backgroundColor: themeMUI =>
                      themeMUI.palette.background.primary,
                  },
                }}
              >
                {rows.map(row => (
                  <TableRow key={row.userData}>
                    <TableCell
                      style={{
                        fontSize: isBigScreen ? '15px' : '10px',
                        padding: isBigScreen ? '20px' : '10px',
                      }}
                      component="th"
                      scope="row"
                    >
                      {row.userData}
                    </TableCell>
                    <TableCell
                      style={{
                        fontSize: isBigScreen ? '15px' : '10px',
                        fontWeight: '600',
                        textAlign: 'left',
                        padding: isBigScreen ? '20px' : '10px',
                      }}
                      align="right"
                    >
                      {row.value}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
        {showForm && (
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
                          '--react-international-phone-flag-height':
                            !isBigScreen ? '16px' : '24px',
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
            </FormikWrapper>
            <PhoneFieldGlobalStyles />
          </>
        )}
        {!showForm && (
          <EditButton type="button" onClick={handleShowForm}>
            <LiaPenAltSolid />
            Редагувати дані
          </EditButton>
        )}
      </div>
    </Wrapper>
  );
};
