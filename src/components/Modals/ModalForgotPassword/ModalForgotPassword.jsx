import { useState } from 'react';
import { useFormik } from 'formik';
import { forgotPasswordSchema } from '../../../common/schemas/forgotPasswordSchema';
import { forgotPassword } from 'api';
import LoaderForModals from '../LoaderForModals';
import { CloseButton } from '../SharedComponent/CloseButton/CloseButton';
import { ModalYellowGradient } from '../SharedComponent/ModalYellowGradient/ModalYellowGradient';
import { Field } from '../SharedComponent/TextField/TextField';
import { ModalAgree } from '../SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from '../SharedComponent/Text/Text';
import { Btn, StyledForm, Text, Wrapper } from './ModalForgotPassword.styled';

export const ModalForgotPassword = ({
  isModalForgotPasswordOpen,
  handleCloseForgotPasswordModal,
  handleCloseSignUpSignInModal,
}) => {
  const [isLoading, setIsLoading] = useState(false);
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
      setIsLoading(true);
      const response = await forgotPassword(values);
      setIsLoading(false);
      if (response) {
        handleOpenAgreeModal();
      }
      handleCloseForgotPasswordModal();
    },
  });

  return (
    <>
      {isLoading ? (
        <LoaderForModals isLoading={isLoading} />
      ) : (
        <ModalYellowGradient
          isModalOpen={isModalForgotPasswordOpen}
          handleCloseModal={handleCloseForgotPasswordModal}
        >
          <CloseButton handleCloseModal={handleCloseForgotPasswordModal} />
          <Wrapper>
            <Text>Відновлення паролю</Text>
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
      )}
      <ModalAgree
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAllModal}
      >
        <TextAgree>
          Щоб відновити пароль, перейдіть за посиланням, яке ми надіслали на
          Вашу електронну пошту.
        </TextAgree>
      </ModalAgree>
    </>
  );
};
