import * as Yup from 'yup';

export const emailSchema = Yup.object({
  email: Yup.string()
    .email('Введіть свою електронну адресу, будь ласка')
    .required('Введіть свою електронну адресу, будь ласка'),
});
