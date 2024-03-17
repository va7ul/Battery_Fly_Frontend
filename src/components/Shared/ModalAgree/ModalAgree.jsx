import ReactModal from 'react-modal';
import { Btn, Text, Wrapper } from './ModalAgree.styled';

const customStyles = {
  overlay: {
    zIndex: '1',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    border: '0px solid transparent',
    borderRadius: '12px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 'none',
    background:
      'linear-gradient(180.00deg, rgb(255, 208, 100),rgba(251, 208, 110, 0) 112.295%)',
  },
};

ReactModal.setAppElement('#modal-root');

export const ModalAgree = ({ isModalAgreeOpen, handleCloseAgreeModal }) => {
  return (
    <ReactModal isOpen={isModalAgreeOpen} style={customStyles}>
      <Wrapper>
        <Text>Ваш запит успішно прийнято.</Text>
        <Text>Очікуйте на дзвінок від менеджера.</Text>
      </Wrapper>
      <Btn type="button" onClick={handleCloseAgreeModal}>
        <div>Гаразд</div>
      </Btn>
    </ReactModal>
  );
};
