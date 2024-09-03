import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Button, ArrowIcon } from './ProfileButton.styled';
import sprite from '../../../assets/images/sprite.svg';
import { selectUserData } from '../../../redux/user/userSelectors';
import { Menu } from '@mui/material';
import { MouseEvent, useState } from 'react';
import { ProfileList } from './ProfileList/ProfileList';
import { useTypedSelector } from '../../../redux/hooks';

export const ProfileButton = () => {
  const userData = useTypedSelector(selectUserData);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  
  const open = Boolean(anchorEl);
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        type="button"
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <AccountCircleOutlinedIcon
          sx={{
            color: 'text.primary',
            width: '24px',
          }}
        />
        {userData.firstName}

        <ArrowIcon handleOpen={anchorEl}>
          <svg>
            <use href={`${sprite}#arrow-left`}></use>
          </svg>
        </ArrowIcon>
      </Button>
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
            bgcolor: 'secondary.main',
            maxWidth: '138px',
            p: '2px 5px',
            borderRadius: '6px',
          },
        }}
      >
        <ProfileList handleClose={handleClose} />
      </Menu>
    </>
  );
};
