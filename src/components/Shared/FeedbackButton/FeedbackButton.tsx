import { FC } from 'react';
import { Button } from './FeedbackButton.styled';

type FeedBackButtonProps = {
  handleOpenModal: () => void;
}

export const FeedBackButton: FC<FeedBackButtonProps> = ({ handleOpenModal }) => {
  return (
    <Button type="button" onClick={handleOpenModal}>
      <div>Зв'язатись</div>
    </Button>
  );
};