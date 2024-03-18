import { MobileMenu } from './MobileMenu/MobileMenu';
import { useMediaQuery } from 'react-responsive';
import { Navigation } from './Navigation/Navigation';
import { StyledHeader, DesktopWrapper } from './Header.styled';
import { Logo } from './Logo/Logo';
import { LoginButton } from './Navigation/LoginButton/LoginButton';
import { ModalSignUpSignIn } from 'components/ModalSignUpSignIn/ModalSignUpSignIn';
import { useState } from 'react';
// import { ProfileButton } from './Navigation/ProfileButton/ProfileButton';

export const Header = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });
  const [isModalSignUpSighInOpen, setIsModalSignUpSighInOpen] = useState(false);

  const handleOpenSignUpSighInModal = () => {
    setIsModalSignUpSighInOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseSignUpSighInModal = () => {
    setIsModalSignUpSighInOpen(false);
    document.body.style.overflow = 'unset';
  };
  return (
    <StyledHeader>
      {mobileVersion ? (
        <MobileMenu />
      ) : (
        <DesktopWrapper>
          <Logo />
          <Navigation />
          <LoginButton
            handleOpenSignUpSighInModal={handleOpenSignUpSighInModal}
          />
          <ModalSignUpSignIn
            isModalSignUpSighInOpen={isModalSignUpSighInOpen}
            handleCloseSignUpSighInModal={handleCloseSignUpSighInModal}
          />
          {/* <ProfileButton /> */}
          {/* {isLoggedIn ? <ProfileButton/> : <LoginButton/>} */}
        </DesktopWrapper>
      )}
    </StyledHeader>
  );
};
