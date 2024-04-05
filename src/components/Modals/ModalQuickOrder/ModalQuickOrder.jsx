import { useState } from 'react';
import ReactModal from 'react-modal';
import { PhoneInput } from 'react-international-phone';
import { useMediaQuery } from 'react-responsive';
import { isPhoneValid } from 'common/schemas/phoneSchema';
import { addQuickOrder } from 'api';
import { ModalAgree } from '../ModalAgree/ModalAgree';
import {
  Btn,
  CodeOfGoodText,
  DivErrorMessage,
  PhoneFieldGlobalStyles,
  StyledForm,
  Title,
  Wrapper,
} from './ModalQuickOrder.styled';
import { CloseButton } from '../SharedComponent/CloseButton/CloseButton';

const customStyles = {
  overlay: {
    zIndex: '5',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
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
  product: { name, codeOfGood },
  isModalQuickOrderOpen,
  handleCloseQuickOrderModal,
}) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const [tel, setTel] = useState('');
  const isValidPhone = isPhoneValid(tel);

  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);

  const handleOpenAgreeModal = () => {
    setIsModalAgreeOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseAgreeModal = () => {
    setIsModalAgreeOpen(false);
    document.body.style.overflow = 'unset';
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const orderData = {
      name,
      codeOfGood,
      tel: tel,
    };
    const response = await addQuickOrder(orderData);
    if (response) {
      handleOpenAgreeModal();
    }
    handleCloseQuickOrderModal();
  };

  return (
    <>
      <ReactModal
        isOpen={isModalQuickOrderOpen}
        onRequestClose={handleCloseQuickOrderModal}
        style={customStyles}
      >
        <CloseButton handleCloseModal={handleCloseQuickOrderModal} />
        <Wrapper>
          <Title>{name}</Title>
          <CodeOfGoodText>Код товару:{codeOfGood}</CodeOfGoodText>
          <StyledForm onSubmit={handleSubmit}>
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
              value={tel}
              onChange={phone => setTel(phone)}
              aria-label="Телефон"
            />
            {!isValidPhone && (
              <DivErrorMessage>
                Введіть свій номер телефону, будь ласка
              </DivErrorMessage>
            )}
            <Btn type="submit" disabled={!isValidPhone || tel === '+380'}>
              <div>Оформити замовлення</div>
            </Btn>
          </StyledForm>
        </Wrapper>
        <PhoneFieldGlobalStyles />
      </ReactModal>
      <ModalAgree
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAgreeModal}
      />
    </>
  );
};
