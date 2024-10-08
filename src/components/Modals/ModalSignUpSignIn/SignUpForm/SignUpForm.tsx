import { FC, useEffect, useState } from 'react';
import { useTypedDispatch } from '../../../../redux/hooks/hooks';
import { useMediaQuery } from 'react-responsive';
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

const localStorageRegisterKey = 'register';

type Props = {
  handleCloseSignUpSignInModal: () => void;
};

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation?: string;
};

export const SignUpForm: FC<Props> = ({ handleCloseSignUpSignInModal }) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);
  const { errorStatus } = useAuth();

  const dispatch = useTypedDispatch();

  let localStorageValue: string | null;

  localStorageValue = localStorage.getItem(localStorageRegisterKey);

  useEffect(() => {
    if (errorStatus === 'Email in use') {
      handleOpenAgreeModal();
    }
  }, [errorStatus]);

  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleClickShowPasswordConfirmation = () =>
    setShowPasswordConfirmation(show => !show);

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
      firstName: localStorageValue
        ? JSON.parse(localStorageValue).firstName
        : '',
      lastName: localStorageValue ? JSON.parse(localStorageValue).lastName : '',
      email: '',
      password: '',
      passwordConfirmation: '',
    },
    validationSchema: signUpSchema,
    onSubmit: (values: FormValues, _) => {
      const userData: FormValues = {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.toLowerCase().trim(),
        password: values.password.trim(),
      };
      localStorage.setItem(
        localStorageRegisterKey,
        JSON.stringify({
          firstName: values.firstName,
          lastName: values.lastName,
        })
      );
      dispatch(register(userData)).then(result => {
        if (result.meta.requestStatus === 'fulfilled') {
          localStorage.removeItem(localStorageRegisterKey);
          handleCloseSignUpSignInModal();
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
              <InputAdornment position="end">
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
              <InputAdornment position="end">
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
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAgreeModal}
        buttonText="Гаразд"
      >
        <TextAgree>Акаунт з такою е-поштою вже зареєстрований.</TextAgree>
      </ModalAgree>
    </>
  );
};
