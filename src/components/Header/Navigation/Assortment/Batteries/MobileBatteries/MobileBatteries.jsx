import { Drawer } from '@mui/material';
import { useState } from 'react';
import sprite from '../../../../../../assets/images/sprite.svg';
import { StyledLink } from '../../../NavItem/NavItem.styled';
import {
  // Wrapper,
  ArrowButton,
  Wrap,
  BackButton,
  TitleText,
} from '../../MobileAssortment/MobileAssortment.styled';
import { BatteriesList } from '../BatteriesList/BatteriesList';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';

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

  const toggleThirdDrawer = newOpen => () => {
    setOpenThirdDrawer(newOpen);
  };

  return (
    // <Wrapper>
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
      <Drawer
        onClick={e => e.stopPropagation()}
        open={openThirdDrawer}
        onClose={toggleThirdDrawer(false)}
        sx={{
          '& .MuiDrawer-paper': {
            bgcolor: 'background.default',
            width: '360px',
            pl: '20px',
            pr: '20px',
          },
        }}
      >
        <Wrap>
          <BackButton type="button" onClick={toggleThirdDrawer(false)}>
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
      </Drawer>
    </>
    // </Wrapper>
  );
};
