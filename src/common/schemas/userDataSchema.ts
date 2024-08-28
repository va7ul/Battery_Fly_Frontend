import * as Yup from 'yup';
import { nameRegex } from '../regex';

export const userDataSchema = Yup.object().shape({
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
    .required("Введіть своє ім'я, будь ласка"),
  patronymic: Yup.string()
    .min(2, "Введіть ім'я по батькові, будь ласка")
    .max(30, "Введіть ім'я по батькові, будь ласка")
    .trim()
    .matches(nameRegex, "Введіть ім'я по батькові кирилицею, будь ласка"),
});
