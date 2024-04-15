import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Wrapper, StyledLink, ArrowButton } from './ProfileButton.styled';
import sprite from '../../../assets/images/sprite.svg';
import { useSelector } from 'react-redux';
import { selectUserData } from '../../../redux/user/userSelectors';
import { Menu } from '@mui/material';
import { useState } from 'react';
import { ProfileList } from './ProfileList/ProfileList';

export const ProfileButton = () => {
  const userData = useSelector(selectUserData);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Wrapper>
      <StyledLink to="/profile">
        <AccountCircleOutlinedIcon
          sx={{
            color: 'text.primary',
            width: '24px',
            zIndex: 2,
          }}
        />
        {userData.firstName}
      </StyledLink>
      <ArrowButton
        handleopen={anchorEl}
        type="button"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <svg>
          <use href={`${sprite}#arrow-left`}></use>
        </svg>
      </ArrowButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{
          '& .MuiMenu-paper': {
            bgcolor: 'svgColor.main',
            width: '130px',
            p: '2px 5px',
            borderRadius: '6px',
          },
        }}
      >
        <ProfileList handleClose={handleClose} />
      </Menu>
    </Wrapper>
  );
};
