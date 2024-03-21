import { useFormik } from 'formik';
import { signUpSchema } from '../../common/schemas/signUpSchema';

import { Btn, StyledForm } from './SignUpForm.styled';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(show => !show);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: (values, actions) => {
      console.log(values);
    },
  });
  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <TextField
        id="firstName"
        name="firstName"
        label="Ім'я"
        type="text"
        value={formik.values.firstName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        helperText={formik.touched.firstName && formik.errors.firstName}
      />
      <TextField
        id="lastName"
        name="lastName"
        label="Прізвище"
        type="text"
        value={formik.values.lastName}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
        helperText={formik.touched.lastName && formik.errors.lastName}
      />
      <TextField
        id="email"
        name="email"
        label="E-пошта"
        type="text"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />
      <TextField
        id="password"
        name="password"
        label="Password"
        type={showPassword ? 'text' : 'password'}
        value={formik.values.password}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.password && Boolean(formik.errors.password)}
        helperText={formik.touched.password && formik.errors.password}
        InputProps={{
          endAdornment: (
            <InputAdornment name="password" position="end">
              <IconButton
                sx={{
                  width: '20px',
                  height: '20px',
                }}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {!showPassword ? (
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
          ),
        }}
      />
      <Btn type="submit">
        <div>Зареєструватись</div>
      </Btn>
    </StyledForm>
  );
};
