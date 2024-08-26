import { FC, useCallback, useEffect, useState } from 'react';
import { useTypedDispatch } from 'redux/hooks';
import { useAuth } from 'utils/hooks';
import { changeMessageOfSuccessfulRequest } from '../../../redux/user/userSlice';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { ModalYellowGradient } from '../SharedComponent/ModalYellowGradient/ModalYellowGradient';
import { CloseButton } from '../SharedComponent/CloseButton/CloseButton';
import { SignUpForm } from './SignUpForm/SignUpForm';
import { SignInForm } from './SignInForm/SignInForm';
import { ModalAgree } from '../SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from '../SharedComponent/Text/Text';
import { Box, BtnWrapper, NavBtn } from './ModalSignUpSignIn.styled';


type Props = {
  isModalSignUpSignInOpen: boolean;
  handleCloseSignUpSignInModal: () => void;
};

export const ModalSignUpSignIn: FC<Props> = ({
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

  const dispatch = useTypedDispatch();

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
        <CustomLoader />
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
