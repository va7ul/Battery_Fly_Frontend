import {
  StyledLink,
  NavList,
  Item,
  HopeIcon,
  CartButton,
} from './Navigation.styled';
import { useMediaQuery } from 'react-responsive';
import sprite from '../../../assets/images/sprite.svg';

export const Navigation = ({ setIsOpen }) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <nav>
      <NavList onClick={() => setIsOpen(false)}>
        <Item>
          {mobileVersion && (
            <HopeIcon>
              <use href={`${sprite}#icon-Hope`}></use>
            </HopeIcon>
          )}
          <StyledLink to="/main">Головна</StyledLink>
        </Item>
        <Item>
          {mobileVersion && (
            <HopeIcon>
              <use href={`${sprite}#icon-Hope`}></use>
            </HopeIcon>
          )}
          <StyledLink to="/about">Про нас</StyledLink>
        </Item>
        <Item>
          {mobileVersion && (
            <HopeIcon>
              <use href={`${sprite}#icon-Hope`}></use>
            </HopeIcon>
          )}
          <StyledLink to="/assortment">Асортимент</StyledLink>
        </Item>
        <Item>
          {mobileVersion && (
            <HopeIcon>
              <use href={`${sprite}#icon-Hope`}></use>
            </HopeIcon>
          )}
          <StyledLink to="/delivery-and-payment">Доставка та оплата</StyledLink>
        </Item>
        <Item>
          {mobileVersion && (
            <HopeIcon>
              <use href={`${sprite}#icon-Hope`}></use>
            </HopeIcon>
          )}
          <StyledLink to="/contacts">Контакти</StyledLink>
        </Item>
        <Item>
          {mobileVersion && (
            <HopeIcon>
              <use href={`${sprite}#icon-Hope`}></use>
            </HopeIcon>
          )}
          <CartButton type="button">Кошик</CartButton>
        </Item>
        <Item>
          {mobileVersion && (
            <HopeIcon>
              <use href={`${sprite}#icon-Hope`}></use>
            </HopeIcon>
          )}
          <StyledLink to="/favorites">Обране</StyledLink>
        </Item>
      </NavList>
    </nav>
  );
};
