import ReactModal from 'react-modal';
import { Box, Btn, ErrorText, Text, TextWrapper } from './ModalAgree.styled';
import { useSelector } from 'react-redux';
import {
  selectIsError,
  selectIsLoading,
} from '../../../redux/feedback/feedbackSelectors';

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
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  return (
    <ReactModal isOpen={isModalAgreeOpen} style={customStyles}>
      <Box>
        {isLoading ? (
            <Text> Loading </Text>
        ) : (
          <>
            <TextWrapper>
              {isError ? (
                <ErrorText>
                  Вибачте, сталася помилка!
                </ErrorText>
              ) : (
                <>
                  <Text>Ваш запит успішно прийнято.</Text>
                  <Text>Очікуйте на дзвінок від менеджера.</Text>
                </>
              )}
            </TextWrapper>
            <Btn type="button" onClick={handleCloseAgreeModal}>
              <div>Гаразд</div>
            </Btn>
          </>
        )}
      </Box>
    </ReactModal>
  );
};
