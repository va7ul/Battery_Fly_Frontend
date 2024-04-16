import { useState } from 'react';
import sprite from '../../../../../../assets/images/sprite.svg';
import { StyledLink } from '../../AssortmentList/ListItem/ListItem.styled';
import { Menu } from '@mui/material';
import { BatteriesList } from '../BatteriesList/BatteriesList';
import { BatteryButton } from './DesktopBatteries.styled';
import { HopeIconDesktop } from 'components/Shared/HopeIconDesktop/HopeIconDesktop';
export const DesktopBatteries = () => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledLink to="/batteries">
        <HopeIconDesktop />
        Акумулятори
      </StyledLink>
      <BatteryButton
        type="button"
        handleopen={anchorEl}
        aria-owns={open ? 'desktop-sub-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        <svg>
          <use href={`${sprite}#arrow-left`}></use>
        </svg>
      </BatteryButton>

      <Menu
        id="desktop-sub-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
        aria-expanded={open ? 'true' : undefined}
        sx={{
          '& .MuiMenu-paper': {
            bgcolor: 'background.default',
            width: '185px',
            pl: '20px',
            pr: '20px',
            borderRadius: '18px',
          },
        }}
      >
        <BatteriesList />
      </Menu>
    </>
  );
};
