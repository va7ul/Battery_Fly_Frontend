import * as Yup from 'yup';

export const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Введіть свою електронну адресу, будь ласка')
    .required('Введіть свою електронну адресу, будь ласка'),
  password: Yup.string()
    .min(8, 'Пароль має бути не менший 8 символів')
    .max(20, 'Пароль має бути не довший 20 символів')
    .trim('Введіть пароль, будь ласка')
    .required('Введіть пароль, будь ласка'),
});
