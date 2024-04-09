import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { signInSchema } from '../../../../common/schemas/signInSchema';
import { login } from '../../../../redux/user/userOperations';
import { selectErrorStatus } from '../../../../redux/user/userSelectors';
import { changeErrorStatus } from '../../../../redux/user/userSlice';
import { useAuth } from 'utils/hooks';
import { ModalForgotPassword } from '../../ModalForgotPassword/ModalForgotPassword';
import { ModalAgree } from 'components/Modals/SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from 'components/Modals/SharedComponent/Text/Text';
import { Field } from 'components/Modals/SharedComponent/TextField/TextField';
import {
  Btn,
  BtnWrapper,
  ForgotPasswordBtn,
  StyledForm,
} from './SignInForm.styled';

export const SignInForm = ({ handleCloseSignUpSignInModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isModalForgotPasswordOpen, setIsModalForgotPasswordOpen] =
    useState(false);
  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);

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

  const handleOpenForgotPasswordModal = () => {
    setIsModalForgotPasswordOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseForgotPasswordModal = () => {
    setIsModalForgotPasswordOpen(false);
    document.body.style.overflow = 'unset';
  };

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
    onSubmit: (values, _) => {
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
