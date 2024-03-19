import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { Box, BtnWrapper, NavBtn } from './ModalSignUpSignIn.styled';
import ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    zIndex: '1',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    border: '0px solid transparent',
    borderRadius: '26px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 'none',
    background:
      'linear-gradient(180.00deg, rgb(255, 208, 100),rgba(251, 208, 110, 0) 112.295%)',
  },
};

ReactModal.setAppElement('#modal-root');

export const ModalSignUpSignIn = ({
  isModalSignUpSighInOpen,
  handleCloseSignUpSighInModal,
}) => {
  return (
    <>
      <ReactModal
        isOpen={isModalSignUpSighInOpen}
        onRequestClose={handleCloseSignUpSighInModal}
        style={customStyles}
      >
        <Box>
          <BtnWrapper>
            <NavBtn type="button">Вхід</NavBtn>
            <NavBtn type="button">Реєстрація</NavBtn>
          </BtnWrapper>
          <SignUpForm />
        </Box>
      </ReactModal>
    </>
  );
};
