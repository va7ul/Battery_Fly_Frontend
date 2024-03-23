import { SignUpForm } from 'components/SignUpForm/SignUpForm';
import { Box, BtnWrapper, NavBtn } from './ModalSignUpSignIn.styled';
import ReactModal from 'react-modal';
import { useState } from 'react';

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
    const [showSignUpForm, setshowSignUpForm] = useState(true);
  const handleShowSignInForm = () => setshowSignUpForm(false);
   const handleShowSignUpForm = () => setshowSignUpForm(true);
  return (
    <>
      <ReactModal
        isOpen={isModalSignUpSighInOpen}
        onRequestClose={handleCloseSignUpSighInModal}
        style={customStyles}
      >
        <Box>
          <BtnWrapper>
            <NavBtn type="button" onClick={handleShowSignInForm}>
              Вхід
            </NavBtn>
            <NavBtn type="button" autoFocus onClick={handleShowSignUpForm}>
              Реєстрація
            </NavBtn>
          </BtnWrapper>
          {showSignUpForm && (
            <SignUpForm
              handleCloseSignUpSighInModal={handleCloseSignUpSighInModal}
            />
          )}
          {!showSignUpForm && <p>wewewe</p>}
        </Box>
      </ReactModal>
    </>
  );
};
