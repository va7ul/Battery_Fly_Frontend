import { Wrapper, Button } from './MobileToolBar.styled';
import { CartIcon } from 'components/Shared/CartIcon';
import { FavoriteIcon } from 'components/Shared/FavoriteIcon';
import { CartModal } from 'components/Shared/CartModal/CartModal';
import { useDispatch, useSelector } from 'react-redux';
import { setCartOpen } from '../../../redux/menu/menuSlice';
import { ModalSignUpSignIn } from '../../Modals/ModalSignUpSignIn/ModalSignUpSignIn';
import { Link } from 'react-router-dom';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import { LoginButton } from '../LoginButton/LoginButton';
import { useAuth } from 'utils/hooks';
import { setAuthModalOpen } from '../../../redux/user/userSlice';
import { selectCart } from '../../../redux/menu/menuSelectors';

export const MobileToolBar = () => {
  const dispatch = useDispatch();
  const { isLoggedIn, isAuthModalOpen } = useAuth();
  const isCartOpen = useSelector(selectCart);

  const handleOpenSignUpSignInModal = () => {
    if (!isLoggedIn) {
      dispatch(setAuthModalOpen(true));
      document.body.style.overflow = 'hidden';
    }
  };
  const handleCloseSignUpSignInModal = () => {
    dispatch(setAuthModalOpen(false));
    document.body.style.overflow = 'unset';
  };

  const toggleCart = () => {
    dispatch(setCartOpen(!isCartOpen));
  };

  return (
    <Wrapper>
      <Button type="button" onClick={toggleCart}>
        <CartIcon />
      </Button>
      <CartModal toggleCart={toggleCart} isCartOpen={isCartOpen} />
        <Link to="/favorites" onClick={handleOpenSignUpSignInModal}>
        <FavoriteIcon />
      </Link>
      <ModalSignUpSignIn
        isModalSignUpSignInOpen={isAuthModalOpen}
        handleCloseSignUpSignInModal={handleCloseSignUpSignInModal}
      />

      {isLoggedIn ? (
        <ProfileButton />
      ) : (
        <LoginButton
          handleOpenSignUpSighInModal={handleOpenSignUpSignInModal}
        />
      )}
    </Wrapper>
  );
};
