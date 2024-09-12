import {
  useTypedDispatch,
  useTypedSelector,
} from '../../../../../../redux/hooks';
import sprite from '../../../../../../assets/images/sprite.svg';
import { StyledLink } from '../../../NavItem/NavItem.styled';
import {
  ArrowButton,
  Wrap,
  BackButton,
  TitleText,
} from '../../MobileAssortment/MobileAssortment.styled';
import { BatteriesList } from '../BatteriesList/BatteriesList';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';
import { MobileDrawer } from 'components/Shared/MobileDrawer';
import {
  selectMenu,
  selectThirdMenu,
} from '../../../../../../redux/menu/menuSelectors';
import {
  setMenuOpen,
  setSubMenuOpen,
  setThirdMenuOpen,
} from '../../../../../../redux/menu/menuSlice';
import { MouseEvent } from 'react';

export const MobileBatteries = () => {
  const dispatch = useTypedDispatch();
  const isMenuOpen = useTypedSelector(selectMenu);
  const isThirdMenuOpen = useTypedSelector(selectThirdMenu);

  const openAll = (newOpen: boolean) => (e: MouseEvent<HTMLElement>) => {
    if (isMenuOpen) {
      dispatch(setMenuOpen(newOpen));
      dispatch(setSubMenuOpen(newOpen));
      dispatch(setThirdMenuOpen(newOpen));
      e.stopPropagation();
    }
  };

  const toggleDrawer = () => {
    dispatch(setThirdMenuOpen(!isThirdMenuOpen));
  };

  return (
    <>
      <StyledLink to="/batteries">
        <HopeIconMobile />
        Акумулятори
      </StyledLink>

      <ArrowButton type="button" onClick={openAll(true)}>
        <svg>
          <use href={`${sprite}#arrow-left`}></use>
        </svg>
      </ArrowButton>

      <MobileDrawer
        isOpen={isThirdMenuOpen}
        toggle={toggleDrawer}
        anchor="left"
      >
        <Wrap>
          <BackButton type="button" onClick={toggleDrawer}>
            <svg>
              <use href={`${sprite}#arrow-left`}></use>
            </svg>
          </BackButton>
          <TitleText>Акумулятори</TitleText>
        </Wrap>
        <BatteriesList handleClick={openAll} />
      </MobileDrawer>
    </>
  );
};
