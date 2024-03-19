import * as Yup from 'yup';
import { passwordRegex } from '../regex';

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Введіть свою електронну адресу, будь ласка')
    .required('Введіть свою електронну адресу, будь ласка'),
  password: Yup.string()
    .min(8, 'Пароль має бути не менший 8 символів')
    .max(20, 'Пароль має бути не довший 20 символів')
    .matches(
      passwordRegex,
      'Пароль має містити великі і малі літери, цифри та символи. Прикад: Testing193!'
    )
    .required('Введіть пароль, будь ласка'),
});
