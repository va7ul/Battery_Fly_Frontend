import { Link } from 'react-router-dom';
import { List, Item, Button } from './ProfileList.styled';
import { useDispatch } from 'react-redux';
import { logOut } from '../../../../../redux/user/userOperations';

export const ProfileList = ({ handleClose }) => {
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(logOut());
  };

  return (
    <List onClick={handleClose}>
      <Item>
        <Link to="/orders">Історія замовлень</Link>
      </Item>
      <Item>
        <Link to="/favorites">Обране</Link>
      </Item>
      <Item>
        <Button type="button" onClick={logout}>
          Вийти
        </Button>
      </Item>
    </List>
  );
};
