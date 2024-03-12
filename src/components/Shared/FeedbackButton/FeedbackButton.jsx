import { Button } from './FeedbackButton.styled';

export const FeedBackButton = ({ handleOpenModal }) => {
  return (
    <Button type="button" onClick={handleOpenModal}>
      <div>Зв'язатися</div>
    </Button>
  );
};
