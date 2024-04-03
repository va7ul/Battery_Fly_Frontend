import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logOut } from '../../../redux/user/userOperations';

export const SideBarNav = () => {
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logOut());
  };

  return (
    <div>
      <ul>
        <li>
          <NavLink to="../profile">Користувач</NavLink>
        </li>
        <li>
          <NavLink to="../orders">Історія замовлень</NavLink>
        </li>
        <li>
          <NavLink to="../favorites">Обране</NavLink>
        </li>
      </ul>
      <button onClick={logout}>Вийти</button>
    </div>
  );
};
