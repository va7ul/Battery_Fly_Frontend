import { useFormik } from 'formik';
import { signUpSchema } from '../../common/schemas/signUpSchema';
import { Btn, BtnWrapper, ForgotPasswordBtn, StyledForm } from './SignInForm.styled';
import { IconButton, InputAdornment, TextField, styled } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useState } from 'react';

const Field = styled(TextField)(() => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'rgb(31, 31, 31)',
    borderRadius: '6px',
  },
  '& .MuiOutlinedInput-input': {
    height: '28px',
    padding: '0px 0px',
  },
  '& .MuiFormLabel-root': {
    fontSize: '10px',
    fontWeight: '600',
    color: 'rgb(31, 31, 31)',
    top: '-8px',
    '&.Mui-focused': {
      color: '#000000',
      fontSize: '10px',
      transform: 'translate(10px, -4px) scale(1)',
    },
  },
  '& .MuiFormLabel-filled': {
    transform: 'translate(10px, -4px) scale(1)',
  },
  '& .MuiInputBase-root': {
    height: '28px',
    padding: '0px 8px',
    fontSize: '10px',
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: '2px solid  rgba(244, 170, 0, 1)',
    },
  },
  '& .MuiFormLabel-root.Mui-error': {
    color: 'rgb(31, 31, 31)',
    fontSize: '10px',
    fontWeight: '500',
    transform: 'translate(10px, -6px)',
  },
  '& .MuiFormHelperText-root.Mui-error': {
    color: 'rgba(255, 0, 0, 1)',
    fontSize: '8px',
    fontWeight: '500',
  },
}));

export const SignInForm = ({ handleCloseSignUpSighInModal }) => {
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
      handleCloseSignUpSighInModal();
    },
  });

  return (
    <StyledForm onSubmit={formik.handleSubmit}>
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
      <BtnWrapper>
        <Btn type="submit">
          <div>Увійти</div>
        </Btn>
        <ForgotPasswordBtn type="button">Забули пароль?</ForgotPasswordBtn>
      </BtnWrapper>
    </StyledForm>
  );
};
