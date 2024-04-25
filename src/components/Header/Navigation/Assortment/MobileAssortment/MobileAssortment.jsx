import sprite from '../../../../../assets/images/sprite.svg';
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
import { useDispatch, useSelector } from 'react-redux';
import {
  selectMenu,
  selectSubMenu,
} from '../../../../../redux/menu/menuSelectors';
import {
  setMenuOpen,
  setSubMenuOpen,
} from '../../../../../redux/menu/menuSlice';

export const MobileAssortment = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectMenu);
  const isSubMenuOpen = useSelector(selectSubMenu);

  const closeBoth = newOpen => e => {
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
