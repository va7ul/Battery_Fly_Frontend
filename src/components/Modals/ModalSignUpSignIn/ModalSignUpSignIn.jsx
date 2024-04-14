import {useState } from 'react';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { SignInForm } from './SignInForm/SignInForm';
import { CloseButton } from '../SharedComponent/CloseButton/CloseButton';
import { ModalYellowGradient } from '../SharedComponent/ModalYellowGradient/ModalYellowGradient';
import { Box, BtnWrapper, NavBtn } from './ModalSignUpSignIn.styled';

export const ModalSignUpSignIn = ({
  isModalSignUpSignInOpen,
  handleCloseSignUpSignInModal,
}) => {
  const [showSignUpForm, setshowSignUpForm] = useState(false);

  const handleShowSignInForm = () => setshowSignUpForm(false);
  const handleShowSignUpForm = () => setshowSignUpForm(true);

  return (
      <ModalYellowGradient
        isModalOpen={isModalSignUpSignInOpen}
        handleCloseModal={handleCloseSignUpSignInModal}
      >
        <CloseButton handleCloseModal={handleCloseSignUpSignInModal} />
        <Box>
          <BtnWrapper>
            <NavBtn
              type="button"
              $show={!showSignUpForm}
              onClick={handleShowSignInForm}
            >
              Вхід
            </NavBtn>
            <NavBtn
              type="button"
              $show={showSignUpForm}
              onClick={handleShowSignUpForm}
            >
              Реєстрація
            </NavBtn>
          </BtnWrapper>
          {showSignUpForm && (
            <SignUpForm
              handleCloseSignUpSignInModal={handleCloseSignUpSignInModal}
            />
          )}
          {!showSignUpForm && (
            <SignInForm
              handleCloseSignUpSignInModal={handleCloseSignUpSignInModal}
            />
          )}
        </Box>
      </ModalYellowGradient>
  );
};
