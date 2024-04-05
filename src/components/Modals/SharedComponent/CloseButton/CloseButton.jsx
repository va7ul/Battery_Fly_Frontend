import { FiX } from 'react-icons/fi';
import { CloseBtn } from './CloseButton.styled.styled';

export const CloseButton = ({ handleCloseQuickOrderModal }) => {
  return (
    <CloseBtn type="button" onClick={handleCloseQuickOrderModal}>
      <FiX />
    </CloseBtn>
  )
};
