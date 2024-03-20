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
            border: '1px solid rgb(31, 31, 31)',
            borderRadius: '6px',
            fontSize: '10px',
            '&:focus': {
              outline: 'none',
              border: '2px solid  rgba(244, 170, 0, 1)',
            },
            '::before': {
              borderBottom: '0px',
            },
            '::after': {
              borderBottom: '0px',
            },
            '&:hover:not(.Mui-disabled, .Mui-error):before': {
              borderBottom: '0px',
            },
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                sx={{
                  width: '20px',
                  height: '20px',
                }}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? (
                  <VisibilityOff
                    sx={{
                      width: '20px',
                      height: '20px',
                    }}
                  />
                ) : (
                  <Visibility
                    sx={{
                      width: '20px',
                      height: '20px',
                    }}
                  />
                )}
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
