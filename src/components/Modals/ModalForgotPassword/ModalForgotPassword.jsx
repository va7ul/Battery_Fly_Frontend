import { useState } from 'react';
import ReactModal from 'react-modal';
import { useFormik } from 'formik';
import { forgotPasswordSchema } from '../../../common/schemas/forgotPasswordSchema';
import { ModalAgree } from '../SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from '../SharedComponent/Text/Text';
import { Field } from '../SharedComponent/TextField/TextField';
import { Btn, StyledForm, Text } from './ModalForgotPassword.styled';

const customStyles = {
  overlay: {
    zIndex: '5',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    border: '0px solid transparent',
    borderRadius: '12px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 'none',
    background:
      'linear-gradient(180.00deg, rgb(255, 208, 100),rgba(251, 208, 110, 0.5) 112.295%)',
  },
};


ReactModal.setAppElement('#modal-root');

export const ModalForgotPassword = ({
  isModalForgotPasswordOpen,
  handleCloseForgotPasswordModal,
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
    onSubmit: (values, _) => {
      handleOpenAgreeModal();
      handleCloseForgotPasswordModal();
    },
  });

  return (
    <>
      <ReactModal
        isOpen={isModalForgotPasswordOpen}
        onRequestClose={handleCloseForgotPasswordModal}
        style={customStyles}
      >
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
      </ReactModal>
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
