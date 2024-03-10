import sprite from '../../../../../assets/images/sprite.svg';
import {
  ArrowButton,
  Wrap,
  BackButton,
  TitleText,
} from './MobileAssortment.styled';
import { StyledLink } from '../../NavItem/NavItem.styled';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { AssortmentList } from '../AssortmentList/AssortmentList';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';

export const MobileAssortment = ({ setIsOpen, isOpen }) => {
  const [openSubDrawer, setOpenSubDrawer] = useState(false);

  const handleClick = newOpen => e => {
    if (isOpen) {
      setOpenSubDrawer(newOpen);
      setIsOpen(newOpen);
      e.stopPropagation();
    }
  };

  const toggleSubDrawer = newOpen => () => {
    setOpenSubDrawer(newOpen);
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
      <Drawer
        onClick={e => e.stopPropagation()}
        open={openSubDrawer}
        onClose={toggleSubDrawer(false)}
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
          <BackButton type="button" onClick={toggleSubDrawer(false)}>
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
      </Drawer>
    </>
  );
};
