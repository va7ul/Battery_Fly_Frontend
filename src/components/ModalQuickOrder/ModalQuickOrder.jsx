import { isPhoneValid } from 'common/schemas/phoneSchema';
import { useState } from 'react';
import ReactModal from 'react-modal';
import { useDispatch} from 'react-redux';
import { useMediaQuery } from 'react-responsive';


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
      'linear-gradient(180.00deg, rgb(255, 208, 100),rgba(251, 208, 110, 0.5) 112.295%)',
  },
};

ReactModal.setAppElement('#modal-root');

export const ModalQuickOrder = ({
  isModalQuickOrderOpen,
  handleCloseQuickOrderModal,
}) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const [phone, setPhone] = useState('');
  const isValidPhone = isPhoneValid(phone);

  const dispatch = useDispatch();

  return (
    <>
      <ReactModal
        isOpen={isModalQuickOrderOpen}
        onRequestClose={handleCloseQuickOrderModal}
        style={customStyles}
      >
        <StyledForm>
          <Label>
            Телефон
            <PhoneInput
              style={{
                '--react-international-phone-height': !isBigScreen
                  ? '28px'
                  : '51px',
                '--react-international-phone-background-color': 'transparent',
                '--react-international-phone-border-color': 'rgb(99, 99, 99)',
                '--react-international-phone-text-color': 'rgb(225, 225, 225)',
                '--react-international-phone-font-size': !isBigScreen
                  ? '10px'
                  : '14px',
                '--react-international-phone-border-radius': !isBigScreen
                  ? '6px'
                  : '8px',
                '--react-international-phone-flag-width': !isBigScreen
                  ? '16px'
                  : '24px',
                '--react-international-phone-flag-height': !isBigScreen
                  ? '16px'
                  : '24px',
              }}
              defaultCountry="ua"
              hideDropdown={true}
              value={phone}
              onChange={phone => setPhone(phone)}
            />
            {!isValidPhone && (
              <DivErrorMessage>
                Введіть свій номер телефону, будь ласка
              </DivErrorMessage>
            )}
          </Label>
        </StyledForm>
        <PhoneFieldGlobalStyles />
      </ReactModal>
    </>
  );
};
