import { useTypedDispatch } from 'redux/hooks';
import { useFormik } from 'formik';
import { emailSchema } from '../../../common/schemas/emailSchema';
import { verifyEmail } from '../../../redux/user/userOperations';
import { ModalYellowGradient } from '../SharedComponent/ModalYellowGradient/ModalYellowGradient';
import { CloseButton } from '../SharedComponent/CloseButton/CloseButton';
import { Field } from '../SharedComponent/TextField/TextField';
import { Btn, StyledForm, Text, Wrapper } from './ModalVerifyEmail.styled';
import { FC } from 'react';

type Props = {
  isModalVerifyEmailOpen: boolean;
  handleCloseVerifyEmailModal: () => void;
  handleCloseSignUpSignInModal: () => void;
};

type FormValues = {
  email: string;
};

export const ModalVerifyEmail: FC<Props> = ({
  isModalVerifyEmailOpen,
  handleCloseVerifyEmailModal,
  handleCloseSignUpSignInModal,
}) => {
  const dispatch = useTypedDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: emailSchema,
    onSubmit: (values: FormValues, _) => {
      dispatch(verifyEmail(values)).then(result => {
        if (result.meta.requestStatus === 'fulfilled') {
          handleCloseSignUpSignInModal();
        }
      });
    },
  });
  return (
    <>
      <ModalYellowGradient
        isModalOpen={isModalVerifyEmailOpen}
        handleCloseModal={handleCloseVerifyEmailModal}
      >
        <CloseButton handleCloseModal={handleCloseVerifyEmailModal} />
        <Wrapper>
          <Text>Ваша е-пошта не верифікована.</Text>
          <Text>Введіть е-пошту для повторної верифікації.</Text>
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
            <Btn type="submit">
              <div>Відправити</div>
            </Btn>
          </StyledForm>
        </Wrapper>
      </ModalYellowGradient>
    </>
  );
};
