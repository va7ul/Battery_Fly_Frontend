import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  BurgerButton,
  MenuWrap,
  HeaderWrap,
  ArrowButton,
} from './MobileMenu.styled';
import { Navigation } from '../Navigation/Navigation';
import Drawer from '@mui/material/Drawer';
import { Logo } from '../Logo/Logo';
import { MobileToolBar } from '../MobileToolBar/MobileToolBar';
import sprite from '../../../assets/images/sprite.svg';

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
        <MobileToolBar />
      </HeaderWrap>

      <Drawer
        open={isOpen}
        onClose={toggleDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            bgcolor: 'background.default',
            width: '360px',
            pl: '20px',
            pr: '20px',
          },
        }}
      >
        <MenuWrap>
          <ArrowButton type="button" onClick={toggleDrawer(false)}>
            <svg>
              <use href={`${sprite}#arrow-left`}></use>
            </svg>
          </ArrowButton>
          <Logo setIsOpen={setIsOpen} />
        </MenuWrap>
        <Navigation setIsOpen={setIsOpen} isOpen={isOpen} />
      </Drawer>
    </div>
  );
};
