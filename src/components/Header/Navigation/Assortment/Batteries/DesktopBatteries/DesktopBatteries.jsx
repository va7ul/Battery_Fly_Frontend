import { useState } from 'react';
import sprite from '../../../../../../assets/images/sprite.svg';
import { StyledLink } from '../../AssortmentList/ListItem/ListItem.styled';
import { Menu } from '@mui/material';
import { BatteriesList } from '../BatteriesList/BatteriesList';
// import { Wrapper } from '../../DesktopAssortment/DesktopAssortment.styled';
import { BatteryButton } from './DesktopBatteries.styled';
import { HopeIconDesktop } from 'components/Shared/HopeIconDesktop/HopeIconDesktop';

export const DesktopBatteries = () => {
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
    // <Wrapper>
    <>
      <HopeIconDesktop />
      <StyledLink to="/batteries">Акумулятори</StyledLink>
      <BatteryButton
        type="button"
        aria-owns={anchorEl ? 'simple-menu' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
        onMouseOver={handleClick}
      >
        <svg>
          <use href={`${sprite}#arrow-right`}></use>
        </svg>
      </BatteryButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        MenuListProps={{ onMouseLeave: handleClose }}
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
        <BatteriesList onClick={handleClose} />
      </Menu>
    </>
    // </Wrapper>
  );
};
