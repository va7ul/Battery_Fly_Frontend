import { useState } from 'react';
import ReactModal from 'react-modal';
import { Formik } from 'formik';
import { useMediaQuery } from 'react-responsive';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { schema } from '../../../common/schemas/feedbackSchema';
import { isPhoneValid } from '../../../common/schemas/feedbackSchema';
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


const onAdd = obj => {
  console.log('obj', obj);
};



export const ModalFeedback = ({ isModalOpen, handleCloseModal }) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const [phone, setPhone] = useState('');
const isValid = isPhoneValid(phone);
  return (
    <ReactModal
      onAdd={onAdd}
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <Text>Залиште свої дані, ми вам передзвонимо</Text>
      <Formik
        initialValues={{
          name: '',
          text: '',
        }}
        validationSchema={schema}
        onSubmit={(values, actions) => {
          onAdd({ ...values, phone });
          actions.resetForm();
          handleCloseModal();
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
            {!isValid && <DivErrorMessage>Phone is not valid</DivErrorMessage>}
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
          <Btn type="submit" disabled={!isValid}>
            <div>Зв'язатись</div>
          </Btn>
        </StyledForm>
      </Formik>
      <PhoneFieldGlobalStyles />
    </ReactModal>
  );
};
