import { Wrapper, Button } from './MobileToolBar.styled';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginIcon from '@mui/icons-material/Login';
import { FeedBackButton } from 'components/Shared/FeedbackButton/FeedbackButton';
import { CartIcon } from 'components/Shared/CartIcon';
import { FavoriteIcon } from 'components/Shared/FavoriteIcon';
import { useState } from 'react';
import { ModalFeedback } from 'components/Modals/ModalFeedback/ModalFeedback';
import { CartModal } from 'components/Shared/CartModal/CartModal';
import { useDispatch } from 'react-redux';
import { setCartOpen } from '../../../redux/menu/menuSlice';
import { ModalSignUpSignIn } from '../../Modals/ModalSignUpSignIn/ModalSignUpSignIn';
import { Link } from 'react-router-dom';

export const MobileToolBar = () => {
  const [isModalFeedbackOpen, setIsModalFeedbackOpen] = useState(false);

  const handleOpenFeedbackModal = () => {
    setIsModalFeedbackOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseFeedbackModal = () => {
    setIsModalFeedbackOpen(false);
    document.body.style.overflow = 'unset';
  };

  const [isModalSignUpSignInOpen, setIsModalSignUpSignInOpen] = useState(false);

  const handleOpenSignUpSignInModal = () => {
    setIsModalSignUpSignInOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseSignUpSignInModal = () => {
    setIsModalSignUpSignInOpen(false);
    document.body.style.overflow = 'unset';
  };

  const dispatch = useDispatch();

  const openDrawer = () => {
    dispatch(setCartOpen(true));
  };

  return (
    <Wrapper>
      <FeedBackButton handleOpenModal={handleOpenFeedbackModal} />
      <ModalFeedback
        isModalFeedbackOpen={isModalFeedbackOpen}
        handleCloseFeedbackModal={handleCloseFeedbackModal}
      />
      <Button type="button" onClick={openDrawer}>
        <CartIcon />
      </Button>
      <CartModal />
      <Link to="/favorites">
        <FavoriteIcon />
      </Link>
      <Button type="button" onClick={handleOpenSignUpSignInModal}>
        <LoginIcon
          sx={{
            color: 'background.paper',
            width: '20px',
            ' &:hover': {
              color: 'secondary.main',
            },
          }}
        />
      </Button>
      <ModalSignUpSignIn
        isModalSignUpSignInOpen={isModalSignUpSignInOpen}
        handleCloseSignUpSignInModal={handleCloseSignUpSignInModal}
      />
      {/* <Button type="button">
        <AccountCircleOutlinedIcon
          sx={{
            color: 'background.paper',
            width: '20px',
              ' &:hover': {
              color: 'secondary.main',
            }
          }}
        />
      </Button> */}
    </Wrapper>
  );
};
