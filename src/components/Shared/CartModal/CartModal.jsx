import ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    zIndex: '200',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    // maxWidth: '960px',
    height: '90vh',
    borderRadius: '8px',
    borderColor: 'transparent',
    padding: '25px 30px',
    overflow: 'auto',
    backgroundColor: '#f7f7f7',
  },
};

export const CartModal = ({ isModalOpen, handleCloseModal }) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <h3>Кошик</h3>
    </ReactModal>
  );
};
