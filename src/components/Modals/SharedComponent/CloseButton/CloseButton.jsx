import { FiX } from 'react-icons/fi';
import { CloseBtn } from './CloseButton.styled.styled';

export const CloseButton = ({ handleCloseModal }) => {
  return (
    <CloseBtn type="button" onClick={handleCloseModal}>
      <FiX />
    </CloseBtn>
  )
};
