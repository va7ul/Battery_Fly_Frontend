import ReactModal from 'react-modal';

const customStyles = {
  overlay: {
    zIndex: '5',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  content: {
    border: '0px solid transparent',
    borderRadius: '18px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 'none',
    background:
      'linear-gradient(180.00deg, rgb(255, 208, 100),rgb(255, 239, 202) 112.295%)',
  },
};

ReactModal.setAppElement('#modal-root');

export const ModalYellowGradient = ({children,
  isModalOpen,
  handleCloseModal,
}) => {
  return (
    <>
      <ReactModal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal}
        style={customStyles}
      >
        {children}
      </ReactModal>
    </>
  );
};
