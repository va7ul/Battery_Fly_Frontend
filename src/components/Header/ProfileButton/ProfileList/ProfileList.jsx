import { List, Item, Button, StyledLink } from './ProfileList.styled';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../../redux/user/userOperations';

export const ProfileList = ({ handleClose }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <List onClick={handleClose}>
      <Item>
        <StyledLink to="/profile" style={{ paddingRight: '32%' }}>
          Мій профіль
        </StyledLink>
      </Item>
      <Item>
        <StyledLink to="/orders" style={{ paddingRight: 0 }}>
          Історія замовлень
        </StyledLink>
      </Item>
      <Item>
        <StyledLink to="/favorites">Обране</StyledLink>
      </Item>
      <Item>
        <Button type="button" onClick={logout}>
          Вийти
        </Button>
      </Item>
    </List>
  );
};
