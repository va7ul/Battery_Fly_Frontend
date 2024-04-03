import { isPhoneValid } from 'common/schemas/phoneSchema';
import { useState } from 'react';
import ReactModal from 'react-modal';
import { useMediaQuery } from 'react-responsive';
import {
  Btn,
  CodeOfGoodText,
  DivErrorMessage,
  PhoneFieldGlobalStyles,
  PriceText,
  StyledForm,
  Title,
  Wrapper,
} from './ModalQuickOrder.styled';
import { PhoneInput } from 'react-international-phone';

const customStyles = {
  overlay: {
    zIndex: '3',
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
  product: { name, codeOfGood, priceWithSale },
  isModalQuickOrderOpen,
  handleCloseQuickOrderModal,
}) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const [phone, setPhone] = useState('');
  const isValidPhone = isPhoneValid(phone);


  return (
    <>
      <ReactModal
        isOpen={isModalQuickOrderOpen}
        onRequestClose={handleCloseQuickOrderModal}
        style={customStyles}
      >
        <Wrapper>
          <Title>{name}</Title>
          <CodeOfGoodText>Код товару:{codeOfGood}</CodeOfGoodText>
          <PriceText>{priceWithSale} грн</PriceText>
          <StyledForm>
            <PhoneInput
              style={{
                '--react-international-phone-height': !isBigScreen
                  ? '23px'
                  : '51px',
                '--react-international-phone-background-color': 'transparent',
                '--react-international-phone-border-color':
                  'rgba(31, 31, 31, 1)',
                '--react-international-phone-text-color': 'rgba(31, 31, 31, 1)',
                '--react-international-phone-font-size': !isBigScreen
                  ? '14px'
                  : '24px',
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
              aria-label="Телефон"
            />
            {!isValidPhone && (
              <DivErrorMessage>
                Введіть свій номер телефону, будь ласка
              </DivErrorMessage>
            )}
            <Btn type="submit" disabled={!isValidPhone || phone === '+380'}>
              <div>Оформити замовлення</div>
            </Btn>
          </StyledForm>
        </Wrapper>
        <PhoneFieldGlobalStyles />
      </ReactModal>
    </>
  );
};
