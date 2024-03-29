import { MobileMenu } from './MobileMenu/MobileMenu';
import { useMediaQuery } from 'react-responsive';
import { Navigation } from './Navigation/Navigation';
import { StyledHeader, DesktopWrapper } from './Header.styled';
import { Logo } from './Logo/Logo';
import { LoginButton } from './Navigation/LoginButton/LoginButton';
// import { ProfileButton } from './Navigation/ProfileButton/ProfileButton';

export const Header = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <StyledHeader>
      {mobileVersion ? (
        <MobileMenu />
      ) : (
        <DesktopWrapper>
          <Logo />
          <Navigation />
          <LoginButton />
          {/* <ProfileButton /> */}
          {/* {isLoggedIn ? <ProfileButton/> : <LoginButton/>} */}
        </DesktopWrapper>
      )}
    </StyledHeader>
  );
};
