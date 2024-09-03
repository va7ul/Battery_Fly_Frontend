import { useTypedDispatch, useTypedSelector } from '../../../../../redux/hooks';
import { MouseEvent } from 'react';import sprite from '../../../../../assets/images/sprite.svg';
import {
  ArrowButton,
  Wrap,
  BackButton,
  TitleText,
} from './MobileAssortment.styled';
import { StyledLink } from '../../NavItem/NavItem.styled';
import { AssortmentList } from '../AssortmentList/AssortmentList';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';
import { MobileDrawer } from 'components/Shared/MobileDrawer';
import {
  selectMenu,
  selectSubMenu,
} from '../../../../../redux/menu/menuSelectors';
import {
  setMenuOpen,
  setSubMenuOpen,
} from '../../../../../redux/menu/menuSlice';


export const MobileAssortment = () => {
  const dispatch = useTypedDispatch();
  const isMenuOpen = useTypedSelector(selectMenu);
  const isSubMenuOpen = useTypedSelector(selectSubMenu);

  const closeBoth = (newOpen: boolean) => (e: MouseEvent<HTMLElement>) => {
    if (isMenuOpen) {
      dispatch(setSubMenuOpen(newOpen));
      dispatch(setMenuOpen(newOpen));
      e.stopPropagation();
    }
  };

  const toggleSubDrawer = () => {
    dispatch(setSubMenuOpen(!isSubMenuOpen));
  };

  return (
    <>
      <StyledLink to="/assortment">
        <HopeIconMobile />
        Асортимент
      </StyledLink>

      <ArrowButton type="button" onClick={closeBoth(true)}>
        <svg>
          <use href={`${sprite}#arrow-left`}></use>
        </svg>
      </ArrowButton>

      <MobileDrawer
        isOpen={isSubMenuOpen}
        toggle={toggleSubDrawer}
        anchor="left"
      >
        <Wrap>
          <BackButton type="button" onClick={toggleSubDrawer}>
            <svg>
              <use href={`${sprite}#arrow-left`}></use>
            </svg>
          </BackButton>
          <TitleText>Асортимент</TitleText>
        </Wrap>
        <AssortmentList />
      </MobileDrawer>
    </>
  );
};
