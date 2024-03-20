import { Formik } from 'formik';
import { signUpSchema } from '../../common/schemas/signUpSchema';

import {
  Btn,
  Label,
  StyledErrorMessage,
  StyledField,
  StyledForm,
} from './SignUpForm.styled';
import { IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(show => !show);
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      }}
      validationSchema={signUpSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
      }}
    >
      <StyledForm>
        <Label>
          Ім'я
          <StyledField name="firstName" type="text" />
          <StyledErrorMessage name="firstName" component="div" />
        </Label>

        <Label>
          Прізвище
          <StyledField name="lastName" type="text" />
          <StyledErrorMessage name="lastName" component="div" />
        </Label>

        <Label>
          E-пошта
          <StyledField name="email" type="email" />
          <StyledErrorMessage name="email" component="div" />
        </Label>

        <InputLabel
          sx={{
            fontSize: '10px',
            fontWeight: '600',
            color: 'rgba(31, 31, 31, 1);',
          }}
          htmlFor="standard-adornment-password"
        >
          Пароль
        </InputLabel>
        <Input
          id="standard-adornment-password"
          name="password"
          type={showPassword ? 'text' : 'password'}
          sx={{
            width: '261px',
            height: '28px',
            padding: '4px 8px',
            // border: '1px solid rgb(31, 31, 31)',
            // borderRadius: '6px',
            fontSize: '10px',

            // '& .MuiInputBase-root.MuiInput-root:before': {
            //   borderBottom: '0px solid rgba(0, 0, 0, 0.42)',
            // },
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />

        <Btn type="submit">
          <div>Зареєструватись</div>
        </Btn>
      </StyledForm>
    </Formik>
  );
};
