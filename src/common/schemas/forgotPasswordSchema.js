import * as Yup from 'yup';

export const forgotPasswordSchema = Yup.object().shape({
  email: Yup.string()
    .email('Введіть свою електронну адресу, будь ласка')
    .required('Введіть свою електронну адресу, будь ласка'),
});
