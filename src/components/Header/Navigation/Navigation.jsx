import { NavList, CartButton, StyledNavLink } from './Navigation.styled';
import { Item } from './NavItem/NavItem.styled';
import { useMediaQuery } from 'react-responsive';
import { NavItem } from './NavItem/NavItem';
import { Assortment } from './Assortment/Assortment';
import { CartIcon } from 'components/Shared/CartIcon';
import { FavoriteIcon } from 'components/Shared/FavoriteIcon';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';
import { CartModal } from 'components/Shared/CartModal/CartModal';
import { selectMenu } from '../../../redux/menu/menuSelectors';
import { setCartOpen, setMenuOpen } from '../../../redux/menu/menuSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Navigation = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectMenu);

  const closeMenu = () => {
    if (isMenuOpen) {
      dispatch(setMenuOpen(false));
    }
  };

  const openCart = () => {
    dispatch(setCartOpen(true));
  };

  return (
    <nav>
      <NavList onClick={closeMenu}>
        <NavItem page="/main" title="Головна" />
        <NavItem page="/about" title="Про нас" />
        <Assortment />
        <NavItem page="/delivery-and-payment" title="Доставка та оплата" />
        <NavItem page="/contacts" title="Контакти" />
        <Item>
          <CartButton type="button" onClick={openCart}>
            {mobileVersion && <HopeIconMobile />}
            <div>Кошик</div>
            {!mobileVersion && <CartIcon />}
          </CartButton>
          <CartModal />
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
