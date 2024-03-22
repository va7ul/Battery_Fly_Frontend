import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';

const UserPage = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="profile">Користувач</NavLink>
        </li>
        <li>
          <NavLink to="orders">Історія замовлень</NavLink>
        </li>
        <li>
          <NavLink to="favorites">Обране</NavLink>
        </li>
      </ul>
      <button>Вийти</button>
      <Suspense fallback={<CustomLoader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default UserPage;
