import { NavList, CartButton } from './Navigation.styled';
import { Item, HopeIcon } from './NavItem/NavItem.styled';
import { useMediaQuery } from 'react-responsive';
import sprite from '../../../assets/images/sprite.svg';
import { NavItem } from './NavItem/NavItem';
import { Assortment } from './Assortment/Assortment';
import { CartIcon } from 'components/Shared/CartIcon';
import { NavLink } from 'react-router-dom';
import { FavoriteIcon } from 'components/Shared/FavoriteIcon';

export const Navigation = ({ setIsOpen, isOpen }) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  const closeDrawer = () => {
    if (isOpen) {
      return setIsOpen(false);
    }
  };

  return (
    <nav>
      <NavList onClick={closeDrawer}>
        <NavItem page="/main" title="Головна" />
        <NavItem page="/about" title="Про нас" />
        <Assortment setIsOpen={setIsOpen} isOpen={isOpen} />
        <NavItem page="/delivery-and-payment" title="Доставка та оплата" />
        <NavItem page="/contacts" title="Контакти" />
        <Item>
          {mobileVersion && (
            <HopeIcon>
              <use href={`${sprite}#icon-Hope`}></use>
            </HopeIcon>
          )}
          <CartButton type="button">
            <div>Кошик</div>
            {!mobileVersion && <CartIcon />}
          </CartButton>
        </Item>
        {mobileVersion ? (
          <NavItem page="/favorites" title="Обране" />
        ) : (
          <NavLink style={{ marginRight: '30px' }} to="/favorites">
            <FavoriteIcon />
          </NavLink>
        )}
      </NavList>
    </nav>
  );
};
