import { StyledLink, Nav, NavList } from './Navigation.styled';

export const Navigation = () => {
  return (
    <Nav>
      <NavList>
        <li>
          <StyledLink to="/about">Про нас</StyledLink>
        </li>
        <li>
          <StyledLink to="/assortment">Асортимент</StyledLink>
        </li>
        <li>
          <StyledLink to="/delivery-and-payment">Доставка та оплата</StyledLink>
        </li>
        <li>
          <StyledLink to="/contacts">Контакти</StyledLink>
        </li>
        <li>
          <StyledLink to="/contacts">Кошик</StyledLink>
        </li>
      </NavList>
    </Nav>
  );
};
