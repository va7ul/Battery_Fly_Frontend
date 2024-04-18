import MenuIcon from '@mui/icons-material/Menu';
import {
  BurgerButton,
  MenuWrap,
  HeaderWrap,
  ArrowButton,
  SubWrap,
} from './MobileMenu.styled';
import { Navigation } from '../Navigation/Navigation';
import { Logo } from '../Logo/Logo';
import { MobileToolBar } from '../MobileToolBar/MobileToolBar';
import sprite from '../../../assets/images/sprite.svg';
import { MobileDrawer } from 'components/Shared/MobileDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from '../../../redux/menu/menuSelectors';
import { setMenuOpen } from '../../../redux/menu/menuSlice';

export const MobileMenu = () => {
  const isMenuOpen = useSelector(selectMenu);
  const dispatch = useDispatch();

  const openMenu = () => {
    dispatch(setMenuOpen(true));
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      dispatch(setMenuOpen(false));
    }
  };

  return (
    <>
      <HeaderWrap>
        <SubWrap>
          <BurgerButton onClick={openMenu}>
            <MenuIcon />
          </BurgerButton>
          <Logo />
        </SubWrap>
        <MobileToolBar />
      </HeaderWrap>

      <MobileDrawer isOpen={isMenuOpen} closeDrawer={closeMenu} anchor="left">
        <MenuWrap>
          <ArrowButton type="button" onClick={closeMenu}>
            <svg>
              <use href={`${sprite}#arrow-left`}></use>
            </svg>
          </ArrowButton>
          <Logo />
        </MenuWrap>
        <Navigation />
      </MobileDrawer>
    </>
  );
};
