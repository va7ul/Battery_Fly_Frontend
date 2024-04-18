import { Wrapper, Button } from './MobileToolBar.styled';
import { CartIcon } from 'components/Shared/CartIcon';
import { FavoriteIcon } from 'components/Shared/FavoriteIcon';
import { useState } from 'react';
import { CartModal } from 'components/Shared/CartModal/CartModal';
import { useDispatch, useSelector } from 'react-redux';
import { setCartOpen } from '../../../redux/menu/menuSlice';
import { ModalSignUpSignIn } from '../../Modals/ModalSignUpSignIn/ModalSignUpSignIn';
import { Link } from 'react-router-dom';
import { selectIsLoggedIn } from '../../../redux/user/userSelectors';
import { ProfileButton } from '../ProfileButton/ProfileButton';
import { LoginButton } from '../LoginButton/LoginButton';

export const MobileToolBar = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const [isModalSignUpSignInOpen, setIsModalSignUpSignInOpen] = useState(false);

  const handleOpenSignUpSignInModal = () => {
    setIsModalSignUpSignInOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseSignUpSignInModal = () => {
    setIsModalSignUpSignInOpen(false);
    document.body.style.overflow = 'unset';
  };

  const openDrawer = () => {
    dispatch(setCartOpen(true));
  };

  return (
    <Wrapper>
      <Button type="button" onClick={openDrawer}>
        <CartIcon />
      </Button>
      <CartModal />
      <Link to="/favorites">
        <FavoriteIcon />
      </Link>
      <ModalSignUpSignIn
        isModalSignUpSignInOpen={isModalSignUpSignInOpen}
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
