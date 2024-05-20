import { useState } from 'react';
import { useFormik } from 'formik';
import { forgotPasswordSchema } from '../../../common/schemas/forgotPasswordSchema';
import { forgotPassword } from 'api';
import { CloseButton } from '../SharedComponent/CloseButton/CloseButton';
import { ModalYellowGradient } from '../SharedComponent/ModalYellowGradient/ModalYellowGradient';
import { Field } from '../SharedComponent/TextField/TextField';
import { ModalAgree } from '../SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from '../SharedComponent/Text/Text';
import { Btn, StyledForm, Text, Wrapper } from './ModalVerifyEmail.styled';

export const ModalVerifyEmail = ({
  isModalVerifyEmailOpen,
  handleCloseVerifyEmailModal,
  handleCloseSignUpSignInModal,
}) => {
  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);

  const handleOpenAgreeModal = () => {
    setIsModalAgreeOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseAgreeModal = () => {
    setIsModalAgreeOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleCloseAllModal = () => {
    handleCloseAgreeModal();
    handleCloseSignUpSignInModal();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: async (values, _) => {
      const response = await forgotPassword(values);
      if (response) {
        handleOpenAgreeModal();
      }
        handleCloseVerifyEmailModal();
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
          <Text>
            Введена електронна адреса не була Вами верифікована. Введіть, будь
            ласка, е-пошту для повторної верифікації.
          </Text>
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
      <ModalAgree
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAllModal}
      >
        <TextAgree>
          Щоб верифікувати елкутронну адресу, перейдіть за посиланням, яке ми надіслали на
          введену Вами e-пошту.
        </TextAgree>
      </ModalAgree>
    </>
  );
};
