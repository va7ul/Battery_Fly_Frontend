import { FiX } from 'react-icons/fi';
import { CloseBtn } from './CloseButton.styled.styled';
import { FC } from 'react';


type Props = {
  handleCloseModal: () => void,
};

export const CloseButton: FC<Props> = ({ handleCloseModal }) => {
  return (
    <CloseBtn type="button" onClick={handleCloseModal}>
      <FiX />
    </CloseBtn>
  );
};
