import { useState } from 'react';
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

export const MobileBatteries = ({ setIsOpen, isOpen, setOpenSubDrawer }) => {
  const [openThirdDrawer, setOpenThirdDrawer] = useState(false);

  const handleClick = newOpen => e => {
    if (isOpen) {
      setIsOpen(newOpen);
      setOpenSubDrawer(newOpen);
      setOpenThirdDrawer(newOpen);
      e.stopPropagation();
    }
  };

  const closeThirdDrawer = () => {
    if (openThirdDrawer) {
      setOpenThirdDrawer(false);
    }
  };

  return (
    <>
      <StyledLink to="/batteries">
        <HopeIconMobile />
        <div>Акумулятори</div>
      </StyledLink>

      <ArrowButton type="button" onClick={handleClick(true)}>
        <svg>
          <use href={`${sprite}#arrow-left`}></use>
        </svg>
      </ArrowButton>

      <MobileDrawer
        isOpen={openThirdDrawer}
        closeDrawer={closeThirdDrawer}
        anchor="left"
      >
        <Wrap>
          <BackButton type="button" onClick={closeThirdDrawer}>
            <svg>
              <use href={`${sprite}#arrow-left`}></use>
            </svg>
          </BackButton>
          <TitleText>Акумулятори</TitleText>
        </Wrap>
        <BatteriesList
          handleClick={handleClick}
          openThirdDrawer={openThirdDrawer}
        />
      </MobileDrawer>
    </>
  );
};
