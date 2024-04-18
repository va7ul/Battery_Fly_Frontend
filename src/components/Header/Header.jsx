import { MobileMenu } from './MobileMenu/MobileMenu';
import { useMediaQuery } from 'react-responsive';
import { Navigation } from './Navigation/Navigation';
import { StyledHeader, DesktopWrapper } from './Header.styled';
import { Logo } from './Logo/Logo';
import { LoginButton } from './LoginButton/LoginButton';
import { ModalSignUpSignIn } from '../Modals/ModalSignUpSignIn/ModalSignUpSignIn';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/user/userSelectors';
import { ProfileButton } from './ProfileButton/ProfileButton';

export const Header = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const [isModalSignUpSignInOpen, setIsModalSignUpSignInOpen] = useState(false);

  const handleOpenSignUpSignInModal = () => {
    setIsModalSignUpSignInOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseSignUpSignInModal = () => {
    setIsModalSignUpSignInOpen(false);
    document.body.style.overflow = 'unset';
  };
  return (
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
                handleOpenSignUpSighInModal={handleOpenSignUpSignInModal}
              />
            )}
            <ModalSignUpSignIn
              isModalSignUpSignInOpen={isModalSignUpSignInOpen}
              handleCloseSignUpSignInModal={handleCloseSignUpSignInModal}
            />
          </DesktopWrapper>
        </>
      )}
    </StyledHeader>
  );
};
