import LoginIcon from '@mui/icons-material/Login';
import { Button } from './LoginButton.styled';

export const LoginButton = () => {
  return (
    <Button type="button">
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
