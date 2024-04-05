import { useState } from 'react';
import ReactModal from 'react-modal';
import { Formik } from 'formik';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { nameSchema } from '../../../common/schemas/nameSchema';
import { isPhoneValid } from '../../../common/schemas/phoneSchema';
import { addFeedback } from 'api';
import { useMediaQuery } from 'react-responsive';
import { CloseButton } from '../SharedComponent/CloseButton/CloseButton';
import { ModalAgree } from '../ModalAgree/ModalAgree';
import {
  Btn,
  DivErrorMessage,
  Label,
  LabelText,
  PhoneFieldGlobalStyles,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledTextField,
  Text,
  Wrapper,
} from './ModalFeedback.styled';

const customStyles = {
  overlay: {
    zIndex: '5',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    border: '1px solid rgba(99, 99, 99, 1)',
    borderRadius: '26px',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 'none',
    background:
      'linear-gradient(180.00deg, rgb(51, 51, 51) 18%,rgba(75, 75, 75, 0.49) 100%)',
    color: 'rgb(225, 225, 225)',
  },
};

ReactModal.setAppElement('#modal-root');

export const ModalFeedback = ({
  isModalFeedbackOpen,
  handleCloseFeedbackModal,
}) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const [phone, setPhone] = useState('');
  const isValidPhone = isPhoneValid(phone);

  const [isModalAgreeOpen, setIsModalAgreeOpen] = useState(false);

  const handleOpenAgreeModal = () => {
    setIsModalAgreeOpen(true);
    document.body.style.overflow = 'hidden';
  };
  const handleCloseAgreeModal = () => {
    setIsModalAgreeOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <ReactModal
        isOpen={isModalFeedbackOpen}
        onRequestClose={handleCloseFeedbackModal}
        style={customStyles}
      >
        <CloseButton handleCloseModal={handleCloseFeedbackModal} />
        <Wrapper>
          <Text>Залиште свої дані, ми вам передзвонимо</Text>
          <Formik
            initialValues={{
              name: '',
              text: '',
            }}
            validationSchema={nameSchema}
            onSubmit={async (values, actions) => {
              const response = await addFeedback({ ...values, phone });
              actions.resetForm();
              if (response) {
                handleOpenAgreeModal();
              }
              handleCloseFeedbackModal();
            }}
          >
            <StyledForm>
              <Label>
                <LabelText>Ім'я</LabelText>
                <StyledField name="name" type="text" />
                <StyledErrorMessage name="name" component="div" />
              </Label>

              <Label>
                <LabelText>Телефон</LabelText>
                <PhoneInput
                  style={{
                    '--react-international-phone-height': !isBigScreen
                      ? '28px'
                      : '51px',
                    '--react-international-phone-background-color':
                      'transparent',
                    '--react-international-phone-border-color':
                      'rgba(99, 99, 99, 1)',
                    '--react-international-phone-text-color':
                      'rgba(225, 225, 225, 1)',
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
              <Label>
                Коментар
                <StyledTextField
                  component="textarea"
                  name="text"
                  type="text"
                  placeholder="Введіть текст"
                />
                <StyledErrorMessage name="text" component="div" />
              </Label>
              <Btn type="submit" disabled={!isValidPhone || phone === '+380'}>
                <div>Зв'язатись</div>
              </Btn>
            </StyledForm>
          </Formik>
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
