import { PropsChildren } from '../../../../@types/modals.types';
import { FC } from 'react';
import ReactModal from 'react-modal';
import { theme } from 'styles/theme';

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
    background: `${theme.colors.gradientYellow}`,
  },
};

ReactModal.setAppElement('#modal-root');

type Props = {
  isModalOpen: boolean,
  handleCloseModal: () => void,
};

export const ModalYellowGradient: FC<PropsChildren & Props> = ({
  children,
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
