import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  BurgerButton,
  MenuWrap,
  HeaderWrap,
  FeedbackButton,
  ArrowButton,
} from './MobileMenu.styled';
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
      <HeaderWrap>
        <BurgerButton onClick={toggleDrawer(true)}>
          <MenuIcon />
        </BurgerButton>
        <Logo />
        <FeedbackButton type="button">Зв'язатися</FeedbackButton>
      </HeaderWrap>

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
          // width: 360,
        }}
      >
        <MenuWrap>
          <ArrowButton type="button" onClick={toggleDrawer(false)}>
            <ArrowBackIosIcon
              sx={{
                color: 'text.primary',
              }}
            />
          </ArrowButton>
          <Logo />
        </MenuWrap>
        <Navigation />
      </Drawer>
    </div>
  );
};
