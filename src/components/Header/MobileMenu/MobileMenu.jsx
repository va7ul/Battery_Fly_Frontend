import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Logo, Button } from './MobileMenu.styled';
import logo from '../../../assets/images/logo.png';
import { Navigation } from '../Navigation/Navigation';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsOpen(!isOpen)}>
        <GiHamburgerMenu />
      </Button>
      <Logo src={logo} alt="logo" />
      <Navigation />
    </div>
  );
};
