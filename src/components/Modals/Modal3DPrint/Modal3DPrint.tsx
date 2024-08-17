import { FC, useEffect, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { Formik } from 'formik';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import { useMediaQuery } from 'react-responsive';
import toast from 'react-hot-toast';
import { nameSchema } from 'common/schemas/nameSchema';
import { isPhoneValid } from 'common/schemas/phoneSchema';
import {
  selectedAccuracy,
  selectedColor,
  selectedPlactic,
} from '../../../redux/print3D/print3DSelectors';
import { add3DPrintOrder } from '../../../redux/print3D/print3DOperations';
import { useAuth } from 'utils/hooks';
import { CustomLoader } from 'components/Shared/CustomLoader/CustomLoader';
import { CloseButton } from '../SharedComponent/CloseButton/CloseButton';
import { ModalYellowGradient } from '../SharedComponent/ModalYellowGradient/ModalYellowGradient';
import { ModalAgree } from '../SharedComponent/ModalAgree/ModalAgree';
import { TextAgree } from '../SharedComponent/Text/Text';
import { theme } from 'styles/theme';
import {
  Btn,
  DivErrorMessage,
  PhoneFieldGlobalStyles,
  StyledErrorMessage,
  StyledField,
  StyledForm,
  StyledTextField,
  Title,
  Wrapper,
} from './Modal3DPrint.styled';

type Props = {
  isModal3DPrintOpen: boolean;
  handleClose3DPrintModal: () => void;
  file: File[];
};

type UserData = {
  isLoggedIn: boolean;
  userData: {
    firstName: string;
    tel: string;
  };
};

type FormValues = {
  name: string;
  text: string;
};

export const Modal3DPrint: FC<Props> = ({
  isModal3DPrintOpen,
  handleClose3DPrintModal,
  file,
}) => {
  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });
  const {
    isLoggedIn,
    userData: { firstName, tel: userTel },
  }: UserData = useAuth();
  const initialValues: FormValues = {
    name: isLoggedIn ? firstName : '',
    text: '',
  };
  const dispatch = useTypedDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [tel, setTel] = useState(isLoggedIn ? userTel : '+380');

  const accuracy = useTypedSelector(selectedAccuracy);
  const plactic = useTypedSelector(selectedPlactic);
  const color = useTypedSelector(selectedColor);

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
          isModalOpen={isModal3DPrintOpen}
          handleCloseModal={handleClose3DPrintModal}
        >
          <CloseButton handleCloseModal={handleClose3DPrintModal} />
          <Wrapper>
            <Title>3D Друк</Title>
            <Formik
              initialValues={initialValues}
              validationSchema={nameSchema}
              onSubmit={(values, _) => {
                const formData = new FormData();
                formData.append('userName', values.name.trim());
                formData.append('tel', tel);
                formData.append('text', values.text);
                formData.append('accuracy', accuracy ?? '');
                formData.append('plactic', plactic ?? '');
                formData.append('color', color ?? '');
                formData.append('file', file as any);

                if (!isValidPhone || tel === '+380') {
                  toast('Введіть номер телефону', {
                    id: 'warning',
                    icon: '👀',
                    style: {
                      background: `${theme.colors.secondary}`,
                      color: `${theme.colors.textPrimary}`,
                    },
                  });
                } else {
                  setIsLoading(true);
                  dispatch(add3DPrintOrder(formData)).then(result => {
                    setIsLoading(false);
                    if (result.meta.requestStatus === 'fulfilled') {
                      handleOpenAgreeModal();
                    }
                  });
                  handleClose3DPrintModal();
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
                  style={
                    {
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
                    } as React.CSSProperties
                  }
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
                <StyledTextField
                  component="textarea"
                  name="text"
                  type="text"
                  placeholder="Ваш коментар (за необхідності)"
                />
                <StyledErrorMessage name="text" component="div" />
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
