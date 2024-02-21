import { StyledLink } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <StyledLink to="/about">Про нас</StyledLink>
      <StyledLink to="/assortment">Асортимент</StyledLink>
      <StyledLink to="/delivery-and-payment">Доставка та оплата</StyledLink>
      <StyledLink to="/contacts">Контакти</StyledLink>
    </>
  );
};
