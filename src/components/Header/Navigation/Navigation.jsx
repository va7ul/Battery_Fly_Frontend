import { NavList, CartButton } from './Navigation.styled';
import { Item, StyledLink } from './NavItem/NavItem.styled';
import { useMediaQuery } from 'react-responsive';
import { NavItem } from './NavItem/NavItem';
import { Assortment } from './Assortment/Assortment';
import { CartIcon } from 'components/Shared/CartIcon';
import { FavoriteIcon } from 'components/Shared/FavoriteIcon';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';
import { CartModal } from 'components/Shared/CartModal/CartModal';
import { selectMenu, selectCart } from '../../../redux/menu/menuSelectors';
import { setCartOpen, setMenuOpen } from '../../../redux/menu/menuSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Navigation = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

  const dispatch = useDispatch();
  const isMenuOpen = useSelector(selectMenu);
  const isCartOpen = useSelector(selectCart);

  const closeMenu = () => {
    if (isMenuOpen) {
      dispatch(setMenuOpen(false));
    }
  };

  const toggleCart = () => {
    dispatch(setCartOpen(!isCartOpen));
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
          <CartButton type="button" onClick={toggleCart}>
            {mobileVersion ? (
              <>
                <HopeIconMobile /> <div>Кошик</div>
              </>
            ) : (
              <CartIcon />
            )}
          </CartButton>
          <CartModal toggleCart={toggleCart} isCartOpen={isCartOpen} />
        </Item>
        {mobileVersion ? (
          <NavItem page="/favorites" title="Обране" />
        ) : (
          <Item>
            <StyledLink to="/favorites">
              <FavoriteIcon />
            </StyledLink>
          </Item>
        )}
      </NavList>
    </nav>
  );
};
