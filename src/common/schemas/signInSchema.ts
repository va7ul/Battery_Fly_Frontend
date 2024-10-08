import { emailRegex } from 'common/regex';
import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
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
});
