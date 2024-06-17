import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import ReactModal from 'react-modal';
import { Formik } from 'formik';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import toast from 'react-hot-toast';
import { nameSchema } from '../../../common/schemas/nameSchema';
import { isPhoneValid } from '../../../common/schemas/phoneSchema';
import { useAuth } from 'utils/hooks';
import { addFeedback } from 'api';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { CloseButton } from '../SharedComponent/CloseButton/CloseButton';
import { ModalAgree } from '../SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from '../SharedComponent/Text/Text';
import { theme } from '../../../styles/GlobalStyled';
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
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
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
    background: `${theme.colors.gradientBlack}`,
    color: `${theme.colors.greyBackgroundPaper}`,
  },
};

const localStorageFeedbacksKey = 'feedback';

ReactModal.setAppElement('#modal-root');

export const ModalFeedback = ({
  isModalFeedbackOpen,
  handleCloseFeedbackModal,
}) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const { isLoggedIn } = useAuth();
  const {
    userData: { firstName, tel: userTel },
  } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [tel, setTel] = useState(isLoggedIn ? userTel : '+380');
  const isValidPhone = isPhoneValid(tel);

  useEffect(() => {
    if (isLoggedIn) {
      setTel(userTel);
    }
    if (!isLoggedIn) {
      setTel('+380');
    }
  }, [isLoggedIn, userTel]);

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
      {isLoading ? (
        <CustomLoader />
      ) : (
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
                name: isLoggedIn
                  ? firstName
                  : JSON.parse(localStorage.getItem(localStorageFeedbacksKey))
                  ? JSON.parse(localStorage.getItem(localStorageFeedbacksKey))
                      .name
                  : '',
                text: JSON.parse(localStorage.getItem(localStorageFeedbacksKey))
                  ? JSON.parse(localStorage.getItem(localStorageFeedbacksKey))
                      .text
                  : '',
              }}
              validationSchema={nameSchema}
              onSubmit={async (values, actions) => {
                const userData = {
                  name: values.name.trim(),
                  text: values.text,
                  tel: tel,
                };

                if (!isValidPhone || tel === '+380') {
                  toast('Введіть номер телефону', {
                    id: 'warning',
                    icon: '👀',
                    duration: 5000,
                    style: {
                      borderRadius: '10px',
                      background: `${theme.colors.secondary}`,
                      color: `${theme.colors.textPrimary}`,
                    },
                  });
                } else {
                  setIsLoading(true);
                  const response = await addFeedback(userData);
                  setIsLoading(false);
                  if (!response) {
                    localStorage.setItem(
                      localStorageFeedbacksKey,
                      JSON.stringify(values)
                    );
                  }
                  actions.resetForm();
                  if (response) {
                    localStorage.removeItem(localStorageFeedbacksKey);
                    handleOpenAgreeModal();
                  }
                  handleCloseFeedbackModal();
                }
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
                      '--react-international-phone-border-color': `${theme.colors.greyBackgroundPaper}`,
                      '--react-international-phone-text-color': `${theme.colors.greyBackgroundPaper}`,
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
                    value={tel}
                    onChange={tel => setTel(tel)}
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
                <Btn type="submit">Зв'язатись</Btn>
              </StyledForm>
            </Formik>
          </Wrapper>
          <PhoneFieldGlobalStyles />
        </ReactModal>
      )}
      <ModalAgree
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAgreeModal}
      >
        <TextAgree>Ваш запит успішно прийнято.</TextAgree>
        <TextAgree>Очікуйте на дзвінок від менеджера.</TextAgree>
      </ModalAgree>
    </>
  );
};
