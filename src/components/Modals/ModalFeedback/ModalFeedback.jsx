import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactModal from 'react-modal';
import { Formik } from 'formik';
import { useMediaQuery } from 'react-responsive';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { nameSchema } from '../../../common/schemas/nameSchema';
import { isPhoneValid } from '../../../common/schemas/phoneSchema';
import { addFeedback } from '../../..//redux/feedback/feedbackOperations';
import { selectUserFeedback } from '../../../redux/feedback/feedbackSelectors';
import { ModalAgree } from '../ModalAgree/ModalAgree';
import {
  Btn,
  DivErrorMessage,
  Label,
  PhoneFieldGlobalStyles,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledTextField,
  Text,
} from './ModalFeedback.styled';

const customStyles = {
  overlay: {
    zIndex: '1',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
  },
  content: {
    border: '1px solid rgb(99, 99, 99)',
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
  const user = useSelector(selectUserFeedback);
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const [phone, setPhone] = useState(user.phone ?? '');
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
  const dispatch = useDispatch();

  return (
    <>
      <ReactModal
        isOpen={isModalFeedbackOpen}
        onRequestClose={handleCloseFeedbackModal}
        style={customStyles}
      >
        <Text>Залиште свої дані, ми вам передзвонимо</Text>
        <Formik
          initialValues={{
            name: user.name ?? '',
            text: '',
          }}
          validationSchema={nameSchema}
          onSubmit={(values, actions) => {
            dispatch(addFeedback({ ...values, phone }));
            actions.resetForm();
            handleCloseFeedbackModal();
            handleOpenAgreeModal();
          }}
        >
          <StyledForm>
            <Label>
              Ім'я
              <StyledField name="name" type="text" />
              <StyledErrorMessage name="name" component="div" />
            </Label>

            <Label>
              Телефон
              <PhoneInput
                style={{
                  '--react-international-phone-height': !isBigScreen
                    ? '28px'
                    : '51px',
                  '--react-international-phone-background-color': 'transparent',
                  '--react-international-phone-border-color': 'rgb(99, 99, 99)',
                  '--react-international-phone-text-color':
                    'rgb(225, 225, 225)',
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
        <PhoneFieldGlobalStyles />
      </ReactModal>
      <ModalAgree
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAgreeModal}
      />
    </>
  );
};
