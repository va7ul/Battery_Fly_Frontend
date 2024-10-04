import { useState, useEffect, FC } from 'react';
import { useTypedDispatch } from '../../../../redux/hooks/hooks';
import { useFormik } from 'formik';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { signInSchema } from '../../../../common/schemas/signInSchema';
import { login } from '../../../../redux/user/userOperations';
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
import { ModalVerifyEmail } from 'components/Modals/ModalVerifyEmail/ModalVerifyEmail';

type Props = {
  handleCloseSignUpSignInModal: () => void;
};

type FormValues = {
  email: string;
  password: string;
};

export const SignInForm: FC<Props> = ({ handleCloseSignUpSignInModal }) => {
  const [showPassword, setShowPassword] = useState(false);

  const [isModalVerifyEmailOpen, setIsModalVerifyEmailOpen] = useState(false);
  const [isModalForgotPasswordOpen, setIsModalForgotPasswordOpen] =
    useState(false);
  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);

  const { isLoggedIn, errorStatus } = useAuth();

  const dispatch = useTypedDispatch();

  const handleOpenAgreeModal = () => {
    setIsModalAgreeOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseAgreeModal = () => {
    setIsModalAgreeOpen(false);
    dispatch(changeErrorStatus(''));
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    if (errorStatus === 'Email or password is wrong') {
      handleOpenAgreeModal();
    } else if (errorStatus === 'Email not verified') {
      handleOpenVerifyEmailModal();
    }
  }, [errorStatus]);

  useEffect(() => {
    if (isLoggedIn) {
      handleCloseSignUpSignInModal();
    }
  }, [isLoggedIn, handleCloseSignUpSignInModal]);

  const handleClickShowPassword = () => setShowPassword(show => !show);

  const handleOpenVerifyEmailModal = () => {
    setIsModalVerifyEmailOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseVerifyEmailModal = () => {
    setIsModalVerifyEmailOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleOpenForgotPasswordModal = () => {
    setIsModalForgotPasswordOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseForgotPasswordModal = () => {
    setIsModalForgotPasswordOpen(false);
    document.body.style.overflow = 'unset';
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: signInSchema,
    onSubmit: (values: FormValues, _) => {
      const userData = {
        email: values.email.toLowerCase().trim(),
        password: values.password.trim(),
      };
      dispatch(login(userData));
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
          value={formik.values.email.toLowerCase()}
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
              <InputAdornment position="end">
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
      <ModalVerifyEmail
        isModalVerifyEmailOpen={isModalVerifyEmailOpen}
        handleCloseVerifyEmailModal={handleCloseVerifyEmailModal}
        handleCloseSignUpSignInModal={handleCloseSignUpSignInModal}
      ></ModalVerifyEmail>
      <ModalForgotPassword
        isModalForgotPasswordOpen={isModalForgotPasswordOpen}
        handleCloseForgotPasswordModal={handleCloseForgotPasswordModal}
        handleCloseSignUpSignInModal={handleCloseSignUpSignInModal}
      />
      <ModalAgree
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAgreeModal}
        buttonText="Гаразд"
      >
        <TextAgree>Некоректно введені дані.</TextAgree>
        <TextAgree>Перевірте, будь ласка, введений логін та пароль.</TextAgree>
      </ModalAgree>
    </>
  );
};
