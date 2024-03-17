import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {
  BurgerButton,
  MenuWrap,
  HeaderWrap,
  ArrowButton,
} from './MobileMenu.styled';
import { Navigation } from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';
import { MobileToolBar } from '../MobileToolBar/MobileToolBar';
import sprite from '../../../assets/images/sprite.svg';
import { MobileDrawer } from 'components/Shared/MobileDrawer';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openDrawer = () => {
    setIsOpen(true);
  };

  const closeDrawer = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div>
      <HeaderWrap>
        <BurgerButton onClick={openDrawer}>
          <MenuIcon />
        </BurgerButton>
        <Logo />
        <MobileToolBar />
      </HeaderWrap>

      <MobileDrawer isOpen={isOpen} closeDrawer={closeDrawer} anchor="left">
        <MenuWrap>
          <ArrowButton type="button" onClick={closeDrawer}>
            <svg>
              <use href={`${sprite}#arrow-left`}></use>
            </svg>
          </ArrowButton>
          <Logo setIsOpen={setIsOpen} isOpen={isOpen} />
        </MenuWrap>
        <Navigation setIsOpen={setIsOpen} isOpen={isOpen} />
      </MobileDrawer>
    </div>
  );
};
