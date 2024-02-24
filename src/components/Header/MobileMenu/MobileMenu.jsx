import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { Button, Wrapper } from './MobileMenu.styled';
import { Navigation } from '../Navigation/Navigation';
import Drawer from '@mui/material/Drawer';
import { Logo } from '../Logo/Logo';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

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
          '& .MuiDrawer-paper': {
            bgcolor: 'background.default',
            width: 360,
            pl: '20px',
            pr: '20px',
          },
          width: 360,
        }}
      >
        <Wrapper>
          <Button type="button" onClick={toggleDrawer(false)}>
            <ArrowBackIosIcon
              sx={{
                color: 'text.primary',
              }}
            />
          </Button>
          <Logo />
        </Wrapper>
        <Navigation />
      </Drawer>
    </div>
  );
};
