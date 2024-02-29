import {
  NavList,
  CartButton,
  // ArrowButton,
} from './Navigation.styled';
import { Item, HopeIcon } from './NavItem/NavItem.styled';
import { useMediaQuery } from 'react-responsive';
import sprite from '../../../assets/images/sprite.svg';
import { NavItem } from './NavItem/NavItem';
import { Assortment } from './Assortment/Assortment';

export const Navigation = ({ setIsOpen }) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  return (
    <nav>
      <NavList onClick={() => setIsOpen(false)}>
        <NavItem page="/main" title="Головна" />
        <NavItem page="/about" title="Про нас" />
        <Assortment />
        <NavItem page="/delivery-and-payment" title="Доставка та оплата" />
        <NavItem page="/contacts" title="Контакти" />
        <Item>
          {mobileVersion && (
            <HopeIcon>
              <use href={`${sprite}#icon-Hope`}></use>
            </HopeIcon>
          )}
          <CartButton type="button">Кошик</CartButton>
        </Item>
        <NavItem page="/favorites" title="Обране" />
      </NavList>
    </nav>
  );
};
