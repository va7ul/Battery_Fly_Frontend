import { Wrapper, Button } from './MobileToolBar.styled';
import { CartIcon } from 'components/Shared/CartIcon';
import { FavoriteIcon } from 'components/Shared/FavoriteIcon';
import { CartModal } from 'components/CartDrawer/CartDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { setCartOpen } from '../../../redux/menu/menuSlice';
import { useNavigate } from 'react-router-dom';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import { LoginButton } from '../LoginButton/LoginButton';
import { useAuth } from 'utils/hooks';
import { setAuthModalOpen } from '../../../redux/user/userSlice';
import { selectCart } from '../../../redux/menu/menuSelectors';

export const MobileToolBar = () => {
  const dispatch = useDispatch();
    const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const isCartOpen = useSelector(selectCart);

  const handleOpenSignUpSignInModal = () => {
    if (!isLoggedIn) {
      dispatch(setAuthModalOpen(true));
      document.body.style.overflow = 'hidden';
    }
    else {
      navigate('/favorites');
    }
  };

  const toggleCart = () => {
    dispatch(setCartOpen(!isCartOpen));
  };

  return (
    <>
      <Wrapper>
        <Button type="button" onClick={toggleCart}>
          <CartIcon />
        </Button>
        <CartModal toggleCart={toggleCart} isCartOpen={isCartOpen} />
        <FavoriteIcon handleOpenSignUpSignInModal={handleOpenSignUpSignInModal} />
        {isLoggedIn ? (
          <ProfileButton />
        ) : (
          <LoginButton
            handleOpenSignUpSighInModal={handleOpenSignUpSignInModal}
          />
        )}
      </Wrapper>
    </>
  );
};
