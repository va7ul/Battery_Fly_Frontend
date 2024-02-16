import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
// import { MenuAppBar } from 'components/Appbar/AppBar';

export const Layout = () => {
  return (
    <div>
      <NavLink to="/">Головна</NavLink>
      <NavLink to="/about">Про нас</NavLink>
      <NavLink to="/assortment">Асортимент</NavLink>
      <NavLink to="/delivery-and-payment">Доставка та оплата</NavLink>
      <NavLink to="/contacts">Контакти</NavLink>
      {/* <MenuAppBar /> */}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
