import { List, Item, StyledLink } from './ProfileList.styled';
import { LogoutButton } from 'components/Shared/LogoutButton/LogoutButton';

export const ProfileList = ({ handleClose }) => {
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
