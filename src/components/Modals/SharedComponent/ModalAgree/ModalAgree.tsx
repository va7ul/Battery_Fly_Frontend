import { FC } from 'react';
import ReactModal from 'react-modal';
import { theme } from 'styles/theme';
import { Box, Btn } from './ModalAgree.styled';
import { PropsChildren } from '../../../../@types/modals.types';

const customStyles = {
  overlay: {
    zIndex: '5',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
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
    background: `${theme.colors.gradientYellow}`,
  },
};

ReactModal.setAppElement('#modal-root');

type Props = {
  isModalAgreeOpen: boolean;
  handleCloseAgreeModal: () => void;
  buttonText: string;
};

export const ModalAgree: FC<PropsChildren & Props> = ({
  children,
  isModalAgreeOpen,
  handleCloseAgreeModal,
  buttonText,
}) => {
  return (
    <ReactModal isOpen={isModalAgreeOpen} style={customStyles}>
      <Box>
        {children}
        <Btn type="button" onClick={handleCloseAgreeModal}>
          <div>{buttonText}</div>
        </Btn>
      </Box>
    </ReactModal>
  );
};
