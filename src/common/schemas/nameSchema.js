import * as Yup from 'yup';
import { nameRegex } from '../regex';

export const nameSchema = Yup.object({
  name: Yup.string()
    .min(2, "Введіть своє ім'я, будь ласка")
    .max(30, "Введіть своє ім'я, будь ласка")
    .trim("Введіть своє ім'я, будь ласка")
    .matches(nameRegex, "Введіть своє ім'я, будь ласка")
    .required("Введіть своє ім'я, будь ласка"),
});


