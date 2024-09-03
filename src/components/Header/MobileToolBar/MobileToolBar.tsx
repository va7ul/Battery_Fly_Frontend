import { useTypedDispatch, useTypedSelector } from '../../../redux/hooks';
import { useAuth } from 'utils/hooks';
import { useNavigate } from 'react-router-dom';
import { Wrapper, Button } from './MobileToolBar.styled';
import { CartIcon } from 'components/Shared/CartIcon';
import { FavoriteIcon } from 'components/Shared/FavoriteIcon';
import { CartModal } from 'components/CartDrawer/CartDrawer';
import { setCartOpen } from '../../../redux/menu/menuSlice';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import { LoginButton } from '../LoginButton/LoginButton';
import { setAuthModalOpen } from '../../../redux/user/userSlice';
import { selectCart } from '../../../redux/menu/menuSelectors';

export const MobileToolBar = () => {
  const dispatch = useTypedDispatch();
    const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const isCartOpen = useTypedSelector(selectCart);

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
            handleOpenSignUpSignInModal={handleOpenSignUpSignInModal}
          />
        )}
      </Wrapper>
    </>
  );
};
