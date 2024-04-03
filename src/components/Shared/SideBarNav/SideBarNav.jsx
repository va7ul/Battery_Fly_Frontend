import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../../redux/user/userOperations';
import { StyledList } from './SideBarNav.styled';

export const SideBarNav = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logOut());
  };

  return (
    <aside>
      <StyledList>
        <li>
          <NavLink to="../profile">Користувач</NavLink>
        </li>
        <li>
          <NavLink to="../orders">Історія замовлень</NavLink>
        </li>
        <li>
          <NavLink to="../favorites">Обране</NavLink>
        </li>
      </StyledList>
      <button onClick={logout}>Вийти</button>
    </aside>
  );
};
