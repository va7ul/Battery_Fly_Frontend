import { useMediaQuery } from 'react-responsive';
import { HighlightedText, Title, Wrapper } from './Hero.styled';
import { FeedBackButton } from 'components/Shared/FeedbackButton/FeedbackButton';
import { useState } from 'react';
import { ModalFeedback } from 'components/Modals/ModalFeedback/ModalFeedback';

export const Hero = () => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });

  const [isModalFeedbackOpen, setIsModalFeedbackOpen] = useState(false);

  const handleOpenFeedbackModal = () => {
    setIsModalFeedbackOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseFeedbackModal = () => {
    setIsModalFeedbackOpen(false);
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
          <FeedBackButton handleOpenModal={handleOpenFeedbackModal} />
          <ModalFeedback
            isModalFeedbackOpen={isModalFeedbackOpen}
            handleCloseFeedbackModal={handleCloseFeedbackModal}
          />
        </>
      )}
    </Wrapper>
  );
};
