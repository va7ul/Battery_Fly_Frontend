import { MobileMenu } from './MobileMenu/MobileMenu';
import { useMediaQuery } from 'react-responsive';
import { Navigation } from './Navigation/Navigation';
//  jjj
export const Header = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <>
      {mobileVersion ? (
        <MobileMenu />
      ) : (
        <nav>
          <ul>
            <Navigation />
          </ul>
        </nav>
      )}

      {/* <NavLink to="/">+38 (063) 435 01 37</NavLink> */}
    </>
  );
};
