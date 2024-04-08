import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { IconButton, InputAdornment} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { signUpSchema } from '../../../../common/schemas/signUpSchema';
import { register } from '../../../../redux/user/userOperations';
import { Btn, StyledForm, Text } from './SignUpForm.styled';
import { selectErrorStatus } from '../../../../redux/user/userSelectors';
import { useAuth } from 'hooks/useAuth';
import { ModalAgree } from 'components/Modals/SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from 'components/Modals/SharedComponent/Text/Text';
import { changeErrorStatus } from '../../../../redux/user/userSlice';
import { Field } from 'components/Modals/SharedComponent/TextField/TextField';


export const SignUpForm = ({ handleCloseSignUpSignInModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const errorStatus = useSelector(selectErrorStatus);
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (errorStatus === 409) {
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
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: signUpSchema,
    onSubmit: (values, actions) => {
      dispatch(register(values));
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
      <ModalAgree
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAgreeModal}
      >
        <TextAgree>
          Введена Вами адреса електронної пошти пов'язана з вже існуючим
          обліковим записом.
        </TextAgree>
      </ModalAgree>
    </>
  );
};
