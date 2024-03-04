import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import { Wrapper, Button, ArrowButton } from './ProfileButton.styled';
import sprite from '../../../../assets/images/sprite.svg';

export const ProfileButton = () => {
  return (
    <Wrapper>
      <Button type="button">
        <AccountCircleOutlinedIcon
          sx={{
            color: 'text.primary',
            width: '24px',
            zIndex: 2,
          }}
        />
        <div>Костянтин</div>
      </Button>
      <ArrowButton type="button">
        <svg>
          <use href={`${sprite}#arrow-left`}></use>
        </svg>
      </ArrowButton>
    </Wrapper>
  );
};
