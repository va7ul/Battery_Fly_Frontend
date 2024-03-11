import { StyledLink } from '../../NavItem/NavItem.styled';
import sprite from '../../../../../assets/images/sprite.svg';
import { Wrapper, ArrowButton } from './DesktopAssortment.styled';
import { useState } from 'react';
import { Menu } from '@mui/material';
import { AssortmentList } from '../AssortmentList/AssortmentList';

export const DesktopAssortment = () => {
  const [anchorEl, setAnchorEl] = useState();

  const handleClick = event => {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <StyledLink to="/assortment">Асортимент</StyledLink>
      <ArrowButton
        type="button"
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        <svg>
          <use href={`${sprite}#arrow-left`}></use>
        </svg>
      </ArrowButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
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
        <AssortmentList onClick={handleClose} />
      </Menu>
    </Wrapper>
  );
};
