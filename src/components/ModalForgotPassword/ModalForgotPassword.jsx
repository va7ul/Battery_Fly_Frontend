import { TextField, styled } from '@mui/material';
import ReactModal from 'react-modal';
import { forgotPasswordSchema } from '../../common/schemas/forgotPasswordSchema';
import { Btn, StyledForm, Text } from './ModalForgotPassword.styled';
import { useFormik } from 'formik';
import { useState } from 'react';
import { ModalForgotPasswordAgree } from 'components/ModalForgotPasswordAgree/ModalForgotPasswordAgree';

const customStyles = {
  overlay: {
    zIndex: '1',
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
      'linear-gradient(180.00deg, rgb(255, 208, 100),rgba(251, 208, 110, 0.3) 112.295%)',
  },
};

const Field = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.text.primary,
    borderRadius: '6px',
    [theme.breakpoints.up('desktop')]: {
      borderRadius: '8px',
    },
  },
  '& .MuiOutlinedInput-input': {
    height: '28px',
    padding: '0px 0px',
    [theme.breakpoints.up('desktop')]: {
      height: '51px',
    },
  },
  '& .MuiFormLabel-root': {
    fontFamily: theme.typography.fontFamily,
    fontSize: '10px',
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
    top: '-8px',
    [theme.breakpoints.up('desktop')]: {
      fontSize: '14px',
      top: '0px',
    },
    '&.Mui-focused': {
      fontSize: '10px',
      color: theme.palette.text.primary,
      transform: 'translate(10px, -4px) scale(1)',
      [theme.breakpoints.up('desktop')]: {
        fontSize: '14px',
        transform: 'translate(10px, -18px) scale(1)',
      },
    },
  },
  '& .MuiFormLabel-filled': {
    transform: 'translate(10px, -4px) scale(1)',
    [theme.breakpoints.up('desktop')]: {
      transform: 'translate(10px, -18px) scale(1)',
    },
  },
  '& .MuiInputBase-root': {
    height: '28px',
    padding: '0px 8px',
    fontFamily: theme.typography.fontFamily,
    fontSize: '10px',
    [theme.breakpoints.up('desktop')]: {
      height: '51px',
      padding: '0px 12px',
      fontSize: '14px',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
  },
  '& .MuiFormLabel-root.Mui-error': {
    fontFamily: theme.typography.fontFamily,
    fontSize: '10px',
    fontWeight: '500',
    color: theme.palette.text.primary,
    transform: 'translate(10px, -6px)',
    [theme.breakpoints.up('desktop')]: {
      fontSize: '14px',
      transform: 'translate(10px, -20px)',
    },
  },
  '& .MuiFormHelperText-root.Mui-error': {
    fontFamily: theme.typography.fontFamily,
    fontSize: '8px',
    fontWeight: '500',
    color: 'rgba(255, 0, 0, 1)',
    [theme.breakpoints.up('desktop')]: {
      fontSize: '12px',
    },
  },
}));

ReactModal.setAppElement('#modal-root');

export const ModalForgotPassword = ({
  isModalForgotPasswordOpen,
  handleCloseForgotPasswordModal,
  handleCloseSignUpSignInModal,
}) => {
  const [isModalForgotPasswordAgreeOpen, setIsModalForgotPasswordAgreeOpen] =
    useState(false);

  const handleOpenForgotPasswordAgreeModal = () => {
    setIsModalForgotPasswordAgreeOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseForgotPasswordAgreeModal = () => {
    setIsModalForgotPasswordAgreeOpen(false);
    document.body.style.overflow = 'unset';
  };

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: forgotPasswordSchema,
    onSubmit: (values, actions) => {
      console.log(values);
      handleOpenForgotPasswordAgreeModal();
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
      <ModalForgotPasswordAgree
        isModalForgotPasswordAgreeOpen={isModalForgotPasswordAgreeOpen}
        handleCloseForgotPasswordAgreeModal={
          handleCloseForgotPasswordAgreeModal
        }
        handleCloseSignUpSignInModal={handleCloseSignUpSignInModal}
      />
    </>
  );
};
