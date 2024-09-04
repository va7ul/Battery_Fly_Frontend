import {  Fragment, useState } from 'react';
import { useTypedDispatch } from '../../../redux/hooks';
import { logOut } from '../../../redux/user/userOperations';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Button,
} from '@mui/material';
import { StyledButton } from './LogoutButton.styled';

export const LogoutButton = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useTypedDispatch();

  const logout = () => {
    dispatch(logOut());
  };
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <StyledButton onClick={handleClickOpen}>Вийти</StyledButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        slotProps={{
          backdrop: {
            sx: {
              backgroundColor: 'rgba(0, 0, 0, 0.75)',
            },
          },
        }}
        sx={{
          '& .MuiDialog-paper': {
            bgcolor: 'secondary.main',
            borderRadius: '18px',
          },
        }}
      >
        <DialogTitle id="alert-dialog-title">{'Вихід'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ви впевнені, що хочете вийти з акаунту?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={logout}
            sx={{
              color: 'text.primary',
              '&:hover': { color: 'hoverColor.main' },
            }}
          >
            Підтвердити
          </Button>
          <Button
            onClick={handleClose}
            sx={{
              color: 'text.primary',
              '&:hover': { color: 'hoverColor.main' },
            }}
          >
            Скасувати
          </Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
