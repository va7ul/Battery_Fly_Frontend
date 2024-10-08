import { FC, useState } from 'react';
import { useFormik } from 'formik';
import { emailSchema } from '../../../common/schemas/emailSchema';
import { forgotPassword } from 'api';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { CloseButton } from '../SharedComponent/CloseButton/CloseButton';
import { ModalYellowGradient } from '../SharedComponent/ModalYellowGradient/ModalYellowGradient';
import { Field } from '../SharedComponent/TextField/TextField';
import { ModalAgree } from '../SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from '../SharedComponent/Text/Text';
import { Btn, StyledForm, Text, Wrapper } from './ModalForgotPassword.styled';

type Props = {
  isModalForgotPasswordOpen: boolean;
  handleCloseForgotPasswordModal: () => void;
  handleCloseSignUpSignInModal: () => void;
};

type FormValues = {
  email: string;
};

export const ModalForgotPassword: FC<Props> = ({
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
    handleCloseSignUpSignInModal();
    handleCloseAgreeModal();
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: emailSchema,
    onSubmit: async (values: FormValues, _) => {
      setIsLoading(true);
      const data = {
        email: values.email.toLowerCase().trim(),
      };
      const response = await forgotPassword(data);
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
        <CustomLoader />
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
        buttonText="Гаразд"
      >
        <TextAgree>
          Щоб відновити пароль, перейдіть за посиланням, яке ми надіслали на
          Вашу е-пошту.
        </TextAgree>
      </ModalAgree>
    </>
  );
};
