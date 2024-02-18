import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <NavLink to="/">Головна</NavLink>
      <NavLink to="/about">Про нас</NavLink>
      <NavLink to="/assortment">Асортимент</NavLink>
      <NavLink to="/delivery-and-payment">Доставка та оплата</NavLink>
      <NavLink to="/contacts">Контакти</NavLink>
      <hr />
    </>
  );
};
