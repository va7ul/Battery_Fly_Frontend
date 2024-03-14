import { useMediaQuery } from 'react-responsive';
import { HighlightedText, Title, Wrapper } from './Hero.styled';
import { FeedBackButton } from 'components/Shared/FeedbackButton/FeedbackButton';
import { useState } from 'react';
import { ModalFeedback } from 'components/Shared/ModalFeedback/ModalFeedback';




export const Hero = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });

  const [isModalOpen, setIsModalOpen] = useState(false);

 const handleOpenModal =() => {
   setIsModalOpen(true);
       document.body.style.overflow = 'hidden';
 }
 const handleCloseModal = ()=> {
   setIsModalOpen(false);
       document.body.style.overflow = 'unset';
  };

  return (
    <Wrapper>
      {isBigScreen ? (
        <Title>
          Пропонуємо широкий спектр продуктів і послуг у сфері
          <HighlightedText>Li-Ion акумуляторів</HighlightedText>
        </Title>
      ) : (
        <Title>
          Широкий спектр продуктів і послуг у сфері
          <HighlightedText>Li-Ion акумуляторів</HighlightedText>
        </Title>
      )}
      {isBigScreen && (
        <>
          <FeedBackButton handleOpenModal={handleOpenModal} />
          <ModalFeedback
            isModalOpen={isModalOpen}
            handleCloseModal={handleCloseModal}
          />
        </>
      )}
    </Wrapper>
  );
};


