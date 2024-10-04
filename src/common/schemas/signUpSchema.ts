import * as Yup from 'yup';
import { emailRegex, nameRegex } from '../regex';

export const signUpSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Введіть своє ім'я, будь ласка")
    .max(20, "Введіть своє ім'я, будь ласка")
    .trim()
    .matches(nameRegex, "Введіть своє ім'я кирилицею, будь ласка")
    .required("Введіть своє ім'я, будь ласка"),
  lastName: Yup.string()
    .min(2, 'Введіть своє прізвище, будь ласка')
    .max(30, 'Введіть своє прізвище, будь ласка')
    .trim()
    .matches(nameRegex, 'Введіть своє прізвище кирилицею, будь ласка')
    .required('Введіть своє прізвище, будь ласка'),
  email: Yup.string()
    .email('Введіть свою електронну адресу, будь ласка')
    .trim()
    .matches(emailRegex, 'Введіть свою електронну адресу, будь ласка')
    .required('Введіть свою електронну адресу, будь ласка'),
  password: Yup.string()
    .min(8, 'Пароль має бути не менший 8 символів')
    .max(20, 'Пароль має бути не довший 20 символів')
    .trim()
    .required('Введіть пароль, будь ласка'),
  passwordConfirmation: Yup.string()
    .oneOf([Yup.ref('password')], 'Паролі мають збігатися')
    .required('Введіть пароль, будь ласка')
    .trim(),
});
