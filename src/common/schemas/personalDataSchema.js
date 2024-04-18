import * as Yup from 'yup';
import { nameRegex } from '../regex';

export const personalDataSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Введіть своє ім'я, будь ласка")
    .max(20, "Введіть своє ім'я, будь ласка")
    .trim("Введіть своє ім'я, будь ласка")
    .matches(nameRegex, "Введіть своє ім'я кирилицею, будь ласка")
    .required("Введіть своє ім'я, будь ласка"),
  lastName: Yup.string()
    .min(2, 'Введіть своє прізвище, будь ласка')
    .max(30, 'Введіть своє прізвище, будь ласка')
    .trim('Введіть своє прізвище, будь ласка')
    .matches(
      nameRegex,
      'Введіть своє прізвище кирилицею, будь ласка'
    )
    .required('Введіть своє прізвище, будь ласка'),
  email: Yup.string()
    .email('Введіть свою електронну адресу, будь ласка')
    .required('Введіть свою електронну адресу, будь ласка'),
});
