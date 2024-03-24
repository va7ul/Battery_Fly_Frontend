import { NavLink } from 'react-router-dom';

export const SideBarNav = () => {
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
      <button>Вийти</button>
    </div>
  );
};
