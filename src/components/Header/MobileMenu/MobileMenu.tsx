import { useTypedDispatch, useTypedSelector } from '../../../redux/hooks';
import MenuIcon from '@mui/icons-material/Menu';
import { selectMenu } from '../../../redux/menu/menuSelectors';
import { setMenuOpen } from '../../../redux/menu/menuSlice';
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

export const MobileMenu = () => {
  const dispatch = useTypedDispatch();
  const isMenuOpen = useTypedSelector(selectMenu);

  const toggleMenu = () => {
    dispatch(setMenuOpen(!isMenuOpen));
  };

  return (
    <>
      <HeaderWrap>
        <SubWrap>
          <BurgerButton onClick={toggleMenu}>
            <MenuIcon />
          </BurgerButton>
          <Logo />
        </SubWrap>
        <MobileToolBar />
      </HeaderWrap>

      <MobileDrawer isOpen={isMenuOpen} toggle={toggleMenu} anchor="left">
        <MenuWrap>
          <ArrowButton type="button" onClick={toggleMenu}>
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
