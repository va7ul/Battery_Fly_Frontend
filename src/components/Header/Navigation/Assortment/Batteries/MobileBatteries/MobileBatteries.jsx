import { Drawer } from '@mui/material';
import { useState } from 'react';
import sprite from '../../../../../../assets/images/sprite.svg';
import { StyledLink } from '../../../NavItem/NavItem.styled';
import {
  Wrapper,
  ArrowButton,
  BatteriesWrap,
  BatteriesButton,
  TitleText,
} from './MobileBatteries.styled';
import { BatteriesList } from '../BatteriesList/BatteriesList';

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
    <Wrapper>
      <StyledLink to="/batteries">Акумулятори</StyledLink>

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
        <BatteriesWrap>
          <BatteriesButton type="button" onClick={toggleThirdDrawer(false)}>
            <svg>
              <use href={`${sprite}#arrow-left`}></use>
            </svg>
          </BatteriesButton>
          <TitleText>Акумулятори</TitleText>
        </BatteriesWrap>
        <BatteriesList
          handleClick={handleClick}
          openThirdDrawer={openThirdDrawer}
        />
      </Drawer>
    </Wrapper>
  );
};
