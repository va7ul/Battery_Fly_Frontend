import { MobileMenu } from './MobileMenu/MobileMenu';
import { useMediaQuery } from 'react-responsive';
import { Navigation } from './Navigation/Navigation';
import { StyledHeader, DesktopWrapper } from './Header.styled';
import { Logo } from './Logo/Logo';
import { LoginButton } from './LoginButton/LoginButton';
import { ModalSignUpSignIn } from '../Modals/ModalSignUpSignIn/ModalSignUpSignIn';
import { ProfileButton } from './ProfileButton/ProfileButton';
import { useAuth } from 'utils/hooks';
import { setAuthModalOpen } from '../../redux/user/userSlice';
import { useDispatch } from 'react-redux';

export const Header = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });
  const dispatch = useDispatch();
  const { isLoggedIn, isAuthModalOpen } = useAuth();

  const handleOpenSignUpSignInModal = () => {
    dispatch(setAuthModalOpen(true));
    document.body.style.overflow = 'hidden';
  };
  const handleCloseSignUpSignInModal = () => {
    dispatch(setAuthModalOpen(false));
    document.body.style.overflow = 'unset';
  };
  return (
    <>
      <StyledHeader>
        {mobileVersion ? (
          <MobileMenu />
        ) : (
          <>
            <Logo />
            <DesktopWrapper>
              <Navigation />
              {isLoggedIn ? (
                <ProfileButton />
              ) : (
                <LoginButton
                  handleOpenSignUpSignInModal={handleOpenSignUpSignInModal}
                />
              )}
            </DesktopWrapper>
          </>
        )}
      </StyledHeader>
      <ModalSignUpSignIn
        isModalSignUpSignInOpen={isAuthModalOpen}
        handleCloseSignUpSignInModal={handleCloseSignUpSignInModal}
      />
    </>
  );
};
