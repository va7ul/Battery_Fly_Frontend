import { useState } from 'react';
import { useAuth } from 'utils/hooks';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { SignInForm } from './SignInForm/SignInForm';
import { CloseButton } from '../SharedComponent/CloseButton/CloseButton';
import LoaderForModals from '../LoaderForModals';
import { ModalYellowGradient } from '../SharedComponent/ModalYellowGradient/ModalYellowGradient';
import { Box, BtnWrapper, NavBtn } from './ModalSignUpSignIn.styled';

export const ModalSignUpSignIn = ({
  isModalSignUpSignInOpen,
  handleCloseSignUpSignInModal,
}) => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const { isLoading } = useAuth();

  const handleShowSignInForm = () => setShowSignUpForm(false);
  const handleShowSignUpForm = () => setShowSignUpForm(true);


  return (
    <>
      {isLoading ? (
        <LoaderForModals isLoading={isLoading} />
      ) : (
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
                handleShowSignInForm={handleShowSignInForm}
                handleCloseSignUpSignInModal={handleCloseSignUpSignInModal}
              />
            )}
          </Box>
        </ModalYellowGradient>
      )}
    </>
  );
};
