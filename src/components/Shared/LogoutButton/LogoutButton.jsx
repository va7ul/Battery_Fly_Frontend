import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
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
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

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
      >
        <DialogTitle id="alert-dialog-title">{'Вихід'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ви впевнені, що хочете вийти з акаунту?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={logout}>Підтвердити</Button>
          <Button onClick={handleClose}>Скасувати</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};
