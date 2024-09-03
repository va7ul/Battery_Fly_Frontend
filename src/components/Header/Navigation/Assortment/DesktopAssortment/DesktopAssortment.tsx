import { StyledLink } from '../../NavItem/NavItem.styled';
import sprite from '../../../../../assets/images/sprite.svg';
import { Wrapper, ArrowButton } from './DesktopAssortment.styled';
import { MouseEvent, useState } from 'react';
import { Menu } from '@mui/material';
import { AssortmentList } from '../AssortmentList/AssortmentList';

export const DesktopAssortment = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: MouseEvent<HTMLElement>)  => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <StyledLink to="/assortment">Асортимент</StyledLink>
      <ArrowButton
        type="button"
        handleOpen={anchorEl}
        onClick={handleClick}
        aria-owns={open ? 'desktop-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
      >
        <svg>
          <use href={`${sprite}#arrow-left`}></use>
        </svg>
      </ArrowButton>

      <Menu
        id="desktop-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        sx={{
          '& .MuiMenu-paper': {
            bgcolor: 'background.default',
            width: '414px',
            pl: '24px',
            pr: '24px',
            borderRadius: '18px',
          },
        }}
      >
        <AssortmentList />
      </Menu>
    </Wrapper>
  );
};
