import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Logo } from './MobileMenu.styled';
import logo from '../../../assets/images/logo.png';
import { Navigation } from '../Navigation/Navigation';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </button>
      <Logo src={logo} alt="logo" />
      <nav>
        <ul>
          <Navigation />
        </ul>
      </nav>
    </div>
  );
};
