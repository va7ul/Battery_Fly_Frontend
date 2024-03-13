import sprite from '../../../../../assets/images/sprite.svg';
import {
  ArrowButton,
  Wrap,
  BackButton,
  TitleText,
} from './MobileAssortment.styled';
import { StyledLink } from '../../NavItem/NavItem.styled';
import { useState } from 'react';
import { AssortmentList } from '../AssortmentList/AssortmentList';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';
import { MobileDrawer } from 'components/Shared/MobileDrawer';

export const MobileAssortment = ({ setIsOpen, isOpen }) => {
  const [openSubDrawer, setOpenSubDrawer] = useState(false);

  const handleClick = newOpen => e => {
    if (isOpen) {
      setOpenSubDrawer(newOpen);
      setIsOpen(newOpen);
      e.stopPropagation();
    }
  };

  const closeSubDrawer = () => {
    if (openSubDrawer) {
      setOpenSubDrawer(false);
    }
  };

  return (
    <>
      <StyledLink to="/assortment">
        <HopeIconMobile />
        <div>Асортимент</div>
      </StyledLink>

      <ArrowButton type="button" onClick={handleClick(true)}>
        <svg>
          <use href={`${sprite}#arrow-left`}></use>
        </svg>
      </ArrowButton>

      <MobileDrawer
        isOpen={openSubDrawer}
        closeDrawer={closeSubDrawer}
        anchor="left"
      >
        <Wrap>
          <BackButton type="button" onClick={closeSubDrawer}>
            <svg>
              <use href={`${sprite}#arrow-left`}></use>
            </svg>
          </BackButton>
          <TitleText>Асортимент</TitleText>
        </Wrap>
        <AssortmentList
          handleClick={handleClick}
          openSubDrawer={openSubDrawer}
          setOpenSubDrawer={setOpenSubDrawer}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
        />
      </MobileDrawer>
    </>
  );
};
