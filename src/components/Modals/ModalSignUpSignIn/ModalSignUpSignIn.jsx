import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useAuth } from 'utils/hooks';
import { changeMessageOfSuccessfulRequest } from '../../../redux/user/userSlice';
import LoaderForModals from '../LoaderForModals';
import { ModalYellowGradient } from '../SharedComponent/ModalYellowGradient/ModalYellowGradient';
import { CloseButton } from '../SharedComponent/CloseButton/CloseButton';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { SignInForm } from './SignInForm/SignInForm';
import { ModalAgree } from '../SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from '../SharedComponent/Text/Text';
import { Box, BtnWrapper, NavBtn } from './ModalSignUpSignIn.styled';

export const ModalSignUpSignIn = ({
  isModalSignUpSignInOpen,
  handleCloseSignUpSignInModal,
}) => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);
  const [isModalFulfilledResendOpen, setIsModalFulfilledResendOpen] =
    useState(false);
  const { isLoading, messageOfSuccessfulRequest } = useAuth();

  const handleShowSignInForm = () => setShowSignUpForm(false);
  const handleShowSignUpForm = () => setShowSignUpForm(true);

  const dispatch = useDispatch();

  const handleOpenAgreeModal = useCallback(() => {
    setIsModalAgreeOpen(true);
    document.body.style.overflow = 'hidden';
  }, [setIsModalAgreeOpen]);

  const handleCloseAgreeModal = () => {
    setIsModalAgreeOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleOpenFulfilledResendModal = useCallback(() => {
    setIsModalFulfilledResendOpen(true);
    document.body.style.overflow = 'hidden';
  }, [setIsModalFulfilledResendOpen]);

  const handleCloseFulfilledResendModal = () => {
    setIsModalFulfilledResendOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    if (messageOfSuccessfulRequest === 'Signup successfully') {
      handleOpenAgreeModal();
      dispatch(changeMessageOfSuccessfulRequest(''));
    }
  }, [dispatch, handleOpenAgreeModal, messageOfSuccessfulRequest]);

  useEffect(() => {
    if (messageOfSuccessfulRequest === 'Verification email sent') {
      handleOpenFulfilledResendModal();
      dispatch(changeMessageOfSuccessfulRequest(''));
    }
  }, [dispatch, handleOpenFulfilledResendModal, messageOfSuccessfulRequest]);

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
                handleCloseSignUpSignInModal={handleCloseSignUpSignInModal}
              />
            )}
          </Box>
        </ModalYellowGradient>
      )}
      <ModalAgree
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAgreeModal}
      >
        <TextAgree>
          На вашу електронну скриньку надіслано повідомлення для верифікації
          пошти.
        </TextAgree>
      </ModalAgree>
      <ModalAgree
        isModalAgreeOpen={isModalFulfilledResendOpen}
        handleCloseAgreeModal={handleCloseFulfilledResendModal}
      >
        <TextAgree>
          Щоб верифікуватись - перейдіть за посиланням, яке ми надіслали на
          вказану e-пошту.
        </TextAgree>
      </ModalAgree>
    </>
  );
};
