import { MobileMenu } from './MobileMenu/MobileMenu';
import { useMediaQuery } from 'react-responsive';
import { Navigation } from './Navigation/Navigation';
import { Logo } from './MobileMenu/MobileMenu.styled';
import logo from '../../assets/images/logo.png';
//  jjj
export const Header = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <>
      {mobileVersion ? (
        <MobileMenu />
      ) : (
        <>
          <Logo src={logo} alt="logo" /> <Navigation />
        </>
      )}

      {/* <NavLink to="/">+38 (063) 435 01 37</NavLink> */}
    </>
  );
};
