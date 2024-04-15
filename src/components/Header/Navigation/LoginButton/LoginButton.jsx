import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import { Button } from './LoginButton.styled';

export const LoginButton = ({ handleOpenSignUpSighInModal }) => {
  return (
    <Button type="button" onClick={handleOpenSignUpSighInModal}>
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
