import { NavList, CartButton, StyledNavLink } from './Navigation.styled';
import { Item } from './NavItem/NavItem.styled';
import { useMediaQuery } from 'react-responsive';
import { NavItem } from './NavItem/NavItem';
import { Assortment } from './Assortment/Assortment';
import { CartIcon } from 'components/Shared/CartIcon';
import { FavoriteIcon } from 'components/Shared/FavoriteIcon';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';
import { useState } from 'react';
import { CartModal } from 'components/Shared/CartModal/CartModal';

export const Navigation = ({ setIsOpen, isOpen }) => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  const [isCartOpen, setIsCartOpen] = useState(false);

  const closeDrawer = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  const openCartDrawer = () => {
    setIsCartOpen(true);
  };

  const closeCartDrawer = () => {
    if (isCartOpen) {
      setIsCartOpen(false);
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
          <CartButton type="button" onClick={openCartDrawer}>
            {mobileVersion && <HopeIconMobile />}
            <div>Кошик</div>
            {!mobileVersion && <CartIcon />}
          </CartButton>
          <CartModal isOpen={isCartOpen} closeCartDrawer={closeCartDrawer} />
        </Item>
        {mobileVersion ? (
          <NavItem page="/favorites" title="Обране" />
        ) : (
          <StyledNavLink to="/favorites">
            <FavoriteIcon />
          </StyledNavLink>
        )}
      </NavList>
    </nav>
  );
};
