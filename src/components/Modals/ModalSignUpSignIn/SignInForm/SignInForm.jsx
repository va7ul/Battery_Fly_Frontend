import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { IconButton, InputAdornment, TextField, styled } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { signInSchema } from '../../../../common/schemas/signInSchema';
import { login } from '../../../../redux/user/userOperations';
import { ModalForgotPassword } from '../../ModalForgotPassword/ModalForgotPassword';
import {
  Btn,
  BtnWrapper,
  ForgotPasswordBtn,
  StyledForm,
} from './SignInForm.styled';
import { selectErrorStatus } from '../../../../redux/user/userSelectors';
import { ModalAgree } from 'components/Modals/SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from 'components/Modals/SharedComponent/Text/Text';
import { useAuth } from 'hooks/useAuth';
import { changeErrorStatus } from '../../../../redux/user/userSlice';

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

export const SignInForm = ({ handleCloseSignUpSignInModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const errorStatus = useSelector(selectErrorStatus);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (errorStatus === 401) {
      handleOpenAgreeModal();
    }
  }, [errorStatus]);

  useEffect(() => {
    if (isLoggedIn) {
      handleCloseSignUpSignInModal();
    }
  }, [isLoggedIn, handleCloseSignUpSignInModal]);

  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const [isModalForgotPasswordOpen, setIsModalForgotPasswordOpen] =
    useState(false);

  const handleOpenForgotPasswordModal = () => {
    setIsModalForgotPasswordOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseForgotPasswordModal = () => {
    setIsModalForgotPasswordOpen(false);
    document.body.style.overflow = 'unset';
  };

  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);

  const handleOpenAgreeModal = () => {
    setIsModalAgreeOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseAgreeModal = () => {
    setIsModalAgreeOpen(false);
    dispatch(changeErrorStatus(''));
    document.body.style.overflow = 'unset';
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: (values, actions) => {
      dispatch(login(values));
    },
  });

  return (
    <>
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
          <ForgotPasswordBtn
            type="button"
            onClick={handleOpenForgotPasswordModal}
          >
            Забули пароль?
          </ForgotPasswordBtn>
        </BtnWrapper>
      </StyledForm>
      <ModalForgotPassword
        isModalForgotPasswordOpen={isModalForgotPasswordOpen}
        handleCloseForgotPasswordModal={handleCloseForgotPasswordModal}
        handleCloseSignUpSignInModal={handleCloseSignUpSignInModal}
      />
      <ModalAgree
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAgreeModal}
      >
        <TextAgree>Некоректно введені дані.</TextAgree>
        <TextAgree>Перевірте, будь ласка, введення логіну та паролю.</TextAgree>
      </ModalAgree>
    </>
  );
};
