import { useNavigate } from 'react-router-dom';
import { useTypedDispatch, useTypedSelector } from '../../../redux/hooks';
import { NavList, CartButton, Box } from './Navigation.styled';
import { Item} from './NavItem/NavItem.styled';
import { useMediaQuery } from 'react-responsive';
import { NavItem } from './NavItem/NavItem';
import { Assortment } from './Assortment/Assortment';
import { CartIcon } from 'components/Shared/CartIcon';
import { FavoriteIcon } from 'components/Shared/FavoriteIcon';
import { HopeIconMobile } from 'components/Shared/HopeIconMobile/HopeIconMobile';
import { CartModal } from 'components/CartDrawer/CartDrawer';
import { selectMenu, selectCart } from '../../../redux/menu/menuSelectors';
import { setCartOpen, setMenuOpen } from '../../../redux/menu/menuSlice';
import { useAuth } from 'utils/hooks';
import { setAuthModalOpen } from '../../../redux/user/userSlice';
import { FC } from 'react';

export const Navigation: FC = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });
  const navigate = useNavigate();
  const dispatch = useTypedDispatch();
  const isMenuOpen = useTypedSelector(selectMenu);
  const { isLoggedIn } = useAuth();
  const isCartOpen = useTypedSelector(selectCart);

  const handleOpenSignUpSignInModal = () => {
    if (!isLoggedIn) {
      dispatch(setAuthModalOpen(true));
      document.body.style.overflow = 'hidden';
    } else {
      navigate('/favorites');
    }
  };

  const closeMenu = () => {
    if (isMenuOpen) {
      dispatch(setMenuOpen(false));
    }
  };

  const toggleCart = () => {
    dispatch(setCartOpen(!isCartOpen));
  };

  return (
    <>
      <nav>
        <NavList onClick={closeMenu}>
          <NavItem page="/" title="Головна" />
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
                <>
                  <CartIcon />
                  <CartModal toggleCart={toggleCart} isCartOpen={isCartOpen} />
                </>
              )}
            </CartButton>
          </Item>
          {mobileVersion ? (
            <Item onClick={handleOpenSignUpSignInModal}>
              <Box>
              <HopeIconMobile /> <div>Обране</div>
              </Box>
            </Item>
          ) : (
            <Item onClick={handleOpenSignUpSignInModal}>
              <FavoriteIcon handleOpenSignUpSignInModal={handleOpenSignUpSignInModal}/>
            </Item>
          )}
        </NavList>
      </nav>
    </>
  );
};
