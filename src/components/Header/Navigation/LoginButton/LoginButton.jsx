import LoginIcon from '@mui/icons-material/Login';
import { Button } from './LoginButton.styled';

export const LoginButton = ({ handleOpenSignUpSighInModal }) => {
  return (
    <Button type="button" onClick={handleOpenSignUpSighInModal}>
      <div>Увійти</div>
      <LoginIcon
        sx={{
          color: 'text.primary',
          width: '24px',
          zIndex: 2,
        }}
      />
    </Button>
  );
};
