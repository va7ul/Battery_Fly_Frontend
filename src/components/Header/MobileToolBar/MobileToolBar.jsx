import { Wrapper, Button } from './MobileToolBar.styled';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginIcon from '@mui/icons-material/Login';
import { FeedBackButton } from 'components/Shared/FeedbackButton/FeedbackButton';
import { CartIcon } from 'components/Shared/CartIcon';
import { FavoriteIcon } from 'components/Shared/FavoriteIcon';
import { useState } from 'react';
import { ModalFeedback } from 'components/Shared/ModalFeedback/ModalFeedback';
import { CartModal } from 'components/Shared/CartModal/CartModal';
import { useDispatch } from 'react-redux';
import { setCartOpen } from '../../../redux/menu/menuSlice';
import { ModalSignUpSignIn } from 'components/ModalSignUpSignIn/ModalSignUpSignIn';

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

  const [isModalSignUpSighInOpen, setIsModalSignUpSighInOpen] = useState(false);

  const handleOpenSignUpSighInModal = () => {
    setIsModalSignUpSighInOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseSignUpSighInModal = () => {
    setIsModalSignUpSighInOpen(false);
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
      <Button type="button">
        <FavoriteIcon />
      </Button>
      <Button type="button" onClick={handleOpenSignUpSighInModal}>
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
        isModalSignUpSighInOpen={isModalSignUpSighInOpen}
        handleCloseSignUpSighInModal={handleCloseSignUpSighInModal}
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
