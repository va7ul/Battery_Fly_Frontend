import { FC } from 'react';
import { List, Item, StyledLink } from './ProfileList.styled';
import { LogoutButton } from 'components/Shared/LogoutButton/LogoutButton';

interface ProfileListProps {
  handleClose: () => void;
}

export const ProfileList: FC<ProfileListProps> = ({ handleClose }) => {
  return (
    <List>
      <Item onClick={handleClose}>
        <StyledLink to="/profile" style={{ paddingRight: '32%' }}>
          Мій профіль
        </StyledLink>
      </Item>
      <Item onClick={handleClose}>
        <StyledLink to="/orders" style={{ paddingRight: 0 }}>
          Історія замовлень
        </StyledLink>
      </Item>
      <Item onClick={handleClose}>
        <StyledLink to="/favorites">Обране</StyledLink>
      </Item>
      <Item>
        <LogoutButton />
      </Item>
    </List>
  );
};
