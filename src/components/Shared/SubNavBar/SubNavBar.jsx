import { useState } from 'react';
import { Menu } from '@mui/material';
import sprite from '../../../assets/images/sprite.svg';
import { BatteriesList } from 'components/Header/Navigation/Assortment/Batteries/BatteriesList/BatteriesList';
import {
  StyledNav,
  StyledList,
  StyledNavLink,
  ArrowButton,
} from './SubNavBar.styled';

export const SubNavBar = () => {
  const [anchorEl, setAnchorEl] = useState();
  const open = Boolean(anchorEl);

  const handleOpen = e => {
    e.preventDefault();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <section>
      <StyledNav>
        <StyledList>
          <li>
            <StyledNavLink to="../batteries">
              <span>Акумулятори</span>
              <ArrowButton
                type="button"
                onClick={handleOpen}
                aria-owns={open ? 'desktop-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
              >
                <svg>
                  <use href={`${sprite}#arrow-left`}></use>
                </svg>
              </ArrowButton>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="../assembly">
              <span>Готові батареї</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="../batteries-for-fpv">
              <span>Для FPV-дронів</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="../batteries-for-transport">
              <span>Для електротранпорту</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="../batteries-for-toys">
              <span>Для іграшок</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="../devices">
              <span>Прилади</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="../materials">
              <span>Розхідні матеріали</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="../3D-print">
              <span>3D друк</span>
            </StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="../sales">
              <span>Акції</span>
            </StyledNavLink>
          </li>
        </StyledList>
      </StyledNav>

      <Menu
        id="desktop-sub-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
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
    </section>
  );
};
