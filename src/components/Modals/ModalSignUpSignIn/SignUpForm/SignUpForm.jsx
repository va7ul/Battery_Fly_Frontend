import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { IconButton, InputAdornment, TextField, styled } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { signUpSchema } from '../../../../common/schemas/signUpSchema';
import { register } from '../../../../redux/user/userOperations';
import { Btn, StyledForm, Text } from './SignUpForm.styled';

const Field = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.text.primary,
    borderRadius: '6px',
    [theme.breakpoints.up('desktop')]: {
      borderRadius: '8px',
    },
  },
  '& .MuiOutlinedInput-input': {
    height: '28px',
    padding: '0px 0px',
    [theme.breakpoints.up('desktop')]: {
      height: '51px',
    },
  },
  '& .MuiFormLabel-root': {
    fontFamily: theme.typography.fontFamily,
    fontSize: '10px',
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
    top: '-8px',
    [theme.breakpoints.up('desktop')]: {
      fontSize: '14px',
      top: '0px',
    },
    '&.Mui-focused': {
      fontSize: '10px',
      color: theme.palette.text.primary,
      transform: 'translate(10px, -4px) scale(1)',
      [theme.breakpoints.up('desktop')]: {
        fontSize: '14px',
        transform: 'translate(10px, -18px) scale(1)',
      },
    },
  },
  '& .MuiFormLabel-filled': {
    transform: 'translate(10px, -4px) scale(1)',
    [theme.breakpoints.up('desktop')]: {
      transform: 'translate(10px, -18px) scale(1)',
    },
  },
  '& .MuiInputBase-root': {
    height: '28px',
    padding: '0px 8px',
    fontFamily: theme.typography.fontFamily,
    fontSize: '10px',
    [theme.breakpoints.up('desktop')]: {
      height: '51px',
      padding: '0px 12px',
      fontSize: '14px',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
  },
  '& .MuiFormLabel-root.Mui-error': {
    fontFamily: theme.typography.fontFamily,
    fontSize: '10px',
    fontWeight: '500',
    color: theme.palette.text.primary,
    transform: 'translate(10px, -6px)',
    [theme.breakpoints.up('desktop')]: {
      fontSize: '14px',
      transform: 'translate(10px, -20px)',
    },
  },
  '& .MuiFormHelperText-root.Mui-error': {
    fontFamily: theme.typography.fontFamily,
    fontSize: '8px',
    fontWeight: '500',
    color: 'rgba(255, 0, 0, 1)',
    [theme.breakpoints.up('desktop')]: {
      fontSize: '12px',
    },
  },
}));

export const SignUpForm = ({ handleCloseSignUpSignInModal }) => {
  const dispatch = useDispatch();

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
      dispatch(register(values));
      actions.resetForm();
      handleCloseSignUpSignInModal();
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
      <Field
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
      <Field
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
      <Field
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
      <Field
        id="password"
        name="password"
        label="Пароль"
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
      <Text>
        Натискаючи кнопку Зареєструватися, ви погоджуєтеся з Умовами
        користування сайту і Правилами обробки персональних даних.
      </Text>
      <Btn type="submit">
        <div>Зареєструватись</div>
      </Btn>
    </StyledForm>
  );
};
