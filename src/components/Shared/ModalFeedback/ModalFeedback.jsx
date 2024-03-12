import ReactModal from 'react-modal';
// import { Formik } from 'formik';
import * as Yup from 'yup';
import { Btn, Label, StyledErrorMessage, StyledField, StyledForm, StyledTextField, Text } from './ModalFeedback.styled';
import { Formik } from 'formik';

const customStyles = {
  overlay: {
    zIndex: '200',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
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
    backgroundColor: 'rgba(51, 51, 51, 1)',
    color: 'rgb(225, 225, 225)',
  },
};

ReactModal.setAppElement('#modal-root');


const nameRegex =
  "[а-яА-Я]";
const numberRegex = '[0-9]';
const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .trim('Enter your name, please')
    .matches(nameRegex, 'Name is not valid')
    .required('Required'),
  number: Yup.string()
    .matches(numberRegex, 'Phone number is not valid')
    .required('Required'),
});

export const ModalFeedback = ({ isModalOpen, handleCloseModal }) => {
  return (
    <ReactModal
      isOpen={isModalOpen}
      onRequestClose={handleCloseModal}
      style={customStyles}
    >
      <Text>Залиште свої дані, ми вам передзвонимо</Text>
      <Formik
        initialValues={{
          name: '',
          number: '',
          text: '',
        }}
        validationSchema={schema}
        // onSubmit={(values, actions) => {
        //   onAdd({ ...values, id: nanoid() });
        //   actions.resetForm();
        // }}
      >
        <StyledForm>
          <Label>
            Ім'я
            <StyledField name="name" type="text" />
            <StyledErrorMessage name="name" component="div" />
          </Label>

          <Label>
            Телефон
            <StyledField name="number" type="tel" />
            <StyledErrorMessage name="number" component="div" />
          </Label>
          <Label>
            Коментар
            <StyledTextField
              component="textarea"
              name="text"
            />
            <StyledErrorMessage name="text" component="div" />
          </Label>
          <Btn type="submit">
            <div>Зв'язатись</div>
          </Btn>
        </StyledForm>
      </Formik>
    </ReactModal>
  );
};

