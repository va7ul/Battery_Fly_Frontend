import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button } from './MobileMenu.styled';
import { Navigation } from '../Navigation/Navigation';
import Drawer from '@mui/material/Drawer';
import { Logo } from '../Logo/Logo';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = newOpen => () => {
    setIsOpen(newOpen);
  };

  return (
    <div>
      <Button onClick={toggleDrawer(true)}>
        <GiHamburgerMenu />
      </Button>
      <Logo />

      <Drawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiPaper-root': {
            bgcolor: 'background.default',
            width: 360,
          },
          width: 360,
        }}
      >
        <Logo />
        <Navigation />
        <Button type="button" onClick={toggleDrawer(false)}>
          CLOSE
        </Button>
      </Drawer>
    </div>
  );
};
