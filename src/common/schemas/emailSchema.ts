import { emailRegex } from 'common/regex';
import * as Yup from 'yup';

export const emailSchema = Yup.object({
  email: Yup.string()
    .email('Введіть свою електронну адресу, будь ласка')
    .matches(emailRegex, 'Введіть свою електронну адресу, будь ласка')
    .required('Введіть свою електронну адресу, будь ласка'),
});
