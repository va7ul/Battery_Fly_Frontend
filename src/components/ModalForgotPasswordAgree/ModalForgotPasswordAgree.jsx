import ReactModal from 'react-modal';
import {  Btn, Text, TextWrapper } from './ModalForgotPasswordAgree.styled';

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

ReactModal.setAppElement('#modal-root');

export const ModalForgotPasswordAgree = ({
  isModalForgotPasswordAgreeOpen,
  handleCloseForgotPasswordAgreeModal,
  handleCloseSignUpSignInModal,
}) => {
  const handleCloseAllModal = () => {
    handleCloseForgotPasswordAgreeModal();
    handleCloseSignUpSignInModal();
  };
  return (
    <ReactModal isOpen={isModalForgotPasswordAgreeOpen} style={customStyles}>
      <TextWrapper>
        <Text>
          Щоб відновити пароль, перейдіть за посиланням, яке ми надіслали на
          вашу електронну пошту.
        </Text>
      </TextWrapper>
      <Btn type="button" onClick={handleCloseAllModal}>
        <div>Гаразд</div>
      </Btn>
    </ReactModal>
  );
};
