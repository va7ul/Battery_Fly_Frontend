import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import { IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { signUpSchema } from '../../../../common/schemas/signUpSchema';
import { register } from '../../../../redux/user/userOperations';
import { changeErrorStatus } from '../../../../redux/user/userSlice';
import { useAuth } from 'utils/hooks';
import { ModalAgree } from 'components/Modals/SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from 'components/Modals/SharedComponent/Text/Text';
import { Field } from 'components/Modals/SharedComponent/TextField/TextField';
import { Btn, StyledForm, Text } from './SignUpForm.styled';
import { useMediaQuery } from 'react-responsive';

export const SignUpForm = ({
  handleShowSignInForm,
  handleCloseSignUpSignInModal,
}) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);
  const [isModalVerifyEmailOpen, setIsModalVerifyEmailOpen] = useState(false);

  const { errorStatus } = useAuth();

  useEffect(() => {
    if (errorStatus === 409) {
      handleOpenAgreeModal();
    }
  }, [errorStatus]);

  const dispatch = useDispatch();

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleClickShowPasswordConfirmation = () =>
    setShowPasswordConfirmation(show => !show);

  const handleOpenVerifyEmailModal = () => {
    setIsModalVerifyEmailOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseVerifyEmailModal = () => {
    setIsModalVerifyEmailOpen(false);
    handleCloseSignUpSignInModal();
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: signUpSchema,
    onSubmit: (values, _) => {
      const userData = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        password: values.password,
      };
      dispatch(register(userData)).then(result => {
        if (result.meta.requestStatus === 'fulfilled') {
          handleOpenVerifyEmailModal();
        }
      });
    },
  });

  return (
    <>
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
                    width: isBigScreen ? '20px' : '16px',
                    height: isBigScreen ? '20px' : '16px',
                  }}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {!showPassword ? (
                    <VisibilityOff
                      sx={{
                        width: isBigScreen ? '20px' : '16px',
                        height: isBigScreen ? '20px' : '16px',
                      }}
                    />
                  ) : (
                    <Visibility
                      sx={{
                        width: isBigScreen ? '20px' : '16px',
                        height: isBigScreen ? '20px' : '16px',
                      }}
                    />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Field
          id="passwordConfirmation"
          name="passwordConfirmation"
          label="Підтвердити пароль"
          type={showPasswordConfirmation ? 'text' : 'password'}
          value={formik.values.passwordConfirmation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.passwordConfirmation &&
            Boolean(formik.errors.passwordConfirmation)
          }
          helperText={
            formik.touched.passwordConfirmation &&
            formik.errors.passwordConfirmation
          }
          InputProps={{
            endAdornment: (
              <InputAdornment name="passwordConfirmation" position="end">
                <IconButton
                  sx={{
                    width: isBigScreen ? '20px' : '16px',
                    height: isBigScreen ? '20px' : '16px',
                  }}
                  aria-label="toggle passwordConfirmation visibility"
                  onClick={handleClickShowPasswordConfirmation}
                >
                  {!showPasswordConfirmation ? (
                    <VisibilityOff
                      sx={{
                        width: isBigScreen ? '20px' : '16px',
                        height: isBigScreen ? '20px' : '16px',
                      }}
                    />
                  ) : (
                    <Visibility
                      sx={{
                        width: isBigScreen ? '20px' : '16px',
                        height: isBigScreen ? '20px' : '16px',
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
      <ModalAgree
        isModalAgreeOpen={isModalVerifyEmailOpen}
        handleCloseAgreeModal={handleCloseVerifyEmailModal}
      >
        <TextAgree>
          На вашу електронну скриньку надіслано повідомлення для верифікації
          пошти.
        </TextAgree>
      </ModalAgree>
      <ModalAgree
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAgreeModal}
      >
        <TextAgree>Акаунт з такою е-поштою вже зареєстрований.</TextAgree>
      </ModalAgree>
    </>
  );
};
