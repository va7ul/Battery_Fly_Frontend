import { Wrapper, Button } from './MobileToolBar.styled';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginIcon from '@mui/icons-material/Login';
import { FeedBackButton } from 'components/Shared/FeedbackButton/FeedbackButton';
import { CartIcon } from 'components/Shared/CartIcon';
import { FavoriteIcon } from 'components/Shared/FavoriteIcon';
import { useState } from 'react';
import { ModalFeedback } from 'components/Shared/ModalFeedback/ModalFeedback';
import { CartModal } from 'components/Shared/CartModal/CartModal';

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

  const [isCartOpen, setIsCartOpen] = useState(false);

  const openDrawer = () => {
    setIsCartOpen(true);
  };

  const closeDrawer = () => {
    if (isCartOpen) {
      setIsCartOpen(false);
    }
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
      <CartModal isOpen={isCartOpen} closeCartDrawer={closeDrawer} />
      <Button type="button">
        <FavoriteIcon />
      </Button>
      <Button type="button">
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
