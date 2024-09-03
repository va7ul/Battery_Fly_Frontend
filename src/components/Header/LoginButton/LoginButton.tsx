import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Button } from './LoginButton.styled';
import { FC } from 'react';
import { SignUpModalProps } from '../../../@types/header.types';

export const LoginButton: FC<SignUpModalProps> = ({ handleOpenSignUpSignInModal }) => {
  return (
    <Button type="button" onClick={handleOpenSignUpSignInModal}>
      Увійти
      <LoginOutlinedIcon
        sx={{
          color: 'text.primary',
          width: '24px',
          zIndex: 2,
        }}
      />
    </Button>
  );
};
