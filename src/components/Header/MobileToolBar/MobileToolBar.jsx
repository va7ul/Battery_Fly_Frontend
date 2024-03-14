import { Wrapper, Button } from './MobileToolBar.styled';
// import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import LoginIcon from '@mui/icons-material/Login';
import { FeedBackButton } from 'components/Shared/FeedbackButton/FeedbackButton';
import { CartIcon } from 'components/Shared/CartIcon';
import { FavoriteIcon } from 'components/Shared/FavoriteIcon';
import { useState } from 'react';
import { ModalFeedback } from 'components/Shared/ModalFeedback/ModalFeedback';

export const MobileToolBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
 const handleOpenModal = () => {
   setIsModalOpen(true);
   document.body.style.overflow = 'hidden';
 };
 const handleCloseModal = () => {
   setIsModalOpen(false);
   document.body.style.overflow = 'unset';
 };

  return (
    <Wrapper>
      <FeedBackButton handleOpenModal={handleOpenModal} />
      <ModalFeedback
        isModalOpen={isModalOpen}
        handleCloseModal={handleCloseModal}
      />
      <Button type="button">
        <CartIcon />
      </Button>
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
