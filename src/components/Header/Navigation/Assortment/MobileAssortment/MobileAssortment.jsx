import sprite from '../../../../../assets/images/sprite.svg';
import { ArrowButton, Wrapper } from './MobileAssortment.styled';
import { StyledLink } from '../../NavItem/NavItem.styled';
import { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import { AssortmentList } from '../AssortmentList/AssortmentList';

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
    <Wrapper>
      <StyledLink to="/assortment">Асортимент</StyledLink>

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
        <AssortmentList handleClick={handleClick} />
      </Drawer>
    </Wrapper>
  );
};
