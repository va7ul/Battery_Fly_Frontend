import { useEffect, useState } from 'react';
import { Formik } from 'formik';
import toast from 'react-hot-toast';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useMediaQuery } from 'react-responsive';
import { nameSchema } from 'common/schemas/nameSchema';
import { isPhoneValid } from 'common/schemas/phoneSchema';
import { useAuth } from 'utils/hooks';
import { addQuickOrder } from 'api';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { CloseButton } from '../SharedComponent/CloseButton/CloseButton';
import { ModalYellowGradient } from '../SharedComponent/ModalYellowGradient/ModalYellowGradient';
import { ModalAgree } from '../SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from '../SharedComponent/Text/Text';
import { theme } from '../../../styles/GlobalStyled';
import {
  Btn,
  CodeOfGoodText,
  DivErrorMessage,
  PhoneFieldGlobalStyles,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  Title,
  Wrapper,
} from './ModalQuickOrder.styled';


export const ModalQuickOrder = ({
  product: { name, codeOfGood },
  isModalQuickOrderOpen,
  handleCloseQuickOrderModal,
}) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const { isLoggedIn } = useAuth();
  const {
    userData: { firstName, tel: userTel },
  } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [tel, setTel] = useState(isLoggedIn ? userTel : '+380');
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

  useEffect(() => {
    if (isLoggedIn) {
      setTel(userTel);
    }
    if (!isLoggedIn) {
      setTel('+380');
    }
  }, [isLoggedIn, userTel]);

  return (
    <>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <ModalYellowGradient
          isModalOpen={isModalQuickOrderOpen}
          handleCloseModal={handleCloseQuickOrderModal}
        >
          <CloseButton handleCloseModal={handleCloseQuickOrderModal} />
          <Wrapper>
            <Title>{name}</Title>
            <CodeOfGoodText>Код товару:{codeOfGood}</CodeOfGoodText>
            <Formik
              initialValues={{
                name: isLoggedIn ? firstName : '',
              }}
              validationSchema={nameSchema}
              onSubmit={async (values, _) => {
                const orderData = {
                  name,
                  codeOfGood,
                  userName: values.name.trim(),
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
                  const response = await addQuickOrder(orderData);
                  setIsLoading(false);
                  if (response) {
                    handleOpenAgreeModal();
                  }
                  handleCloseQuickOrderModal();
                }
              }}
            >
              <StyledForm>
                <StyledField
                  name="name"
                  type="text"
                  placeholder="Ваше ім’я"
                  aria-label="Ім'я"
                />
                <StyledErrorMessage name="name" component="div" />
                <PhoneInput
                  style={{
                    '--react-international-phone-height': !isBigScreen
                      ? '28px'
                      : '51px',
                    '--react-international-phone-background-color':
                      'transparent',
                    '--react-international-phone-border-color': `${theme.colors.textPrimary}`,
                    '--react-international-phone-text-color': `${theme.colors.textPrimary}`,
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
                <Btn type="submit">
                  <div>Оформити замовлення</div>
                </Btn>
              </StyledForm>
            </Formik>
          </Wrapper>
          <PhoneFieldGlobalStyles />
        </ModalYellowGradient>
      )}
      <ModalAgree
        isModalAgreeOpen={isModalAgreeOpen}
        handleCloseAgreeModal={handleCloseAgreeModal}
      >
        <TextAgree>Дякуємо за замовлення.</TextAgree>
        <TextAgree>Очікуйте на дзвінок від менеджера.</TextAgree>
      </ModalAgree>
    </>
  );
};
