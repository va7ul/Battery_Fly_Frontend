import { StyledLink, Nav, NavList, Item } from './Navigation.styled';

export const Navigation = ({ setIsOpen }) => {
  return (
    <Nav>
      <NavList onClick={() => setIsOpen(false)}>
        <Item>
          <StyledLink to="/main">Головна</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/about">Про нас</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/assortment">Асортимент</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/delivery-and-payment">Доставка та оплата</StyledLink>
        </Item>
        <Item>
          <StyledLink to="/contacts">Контакти</StyledLink>
        </Item>
      </NavList>
    </Nav>
  );
};
