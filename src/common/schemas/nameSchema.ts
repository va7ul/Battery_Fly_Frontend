import * as Yup from 'yup';
import { nameRegexForFeedback } from '../regex';


export const nameSchema= Yup.object({
  name: Yup.string()
    .min(2, "Введіть своє ім'я, будь ласка")
    .max(30, "Введіть своє ім'я, будь ласка")
    .trim()
    .matches(nameRegexForFeedback, "Введіть своє ім'я, будь ласка")
    .required("Введіть своє ім'я, будь ласка"),
});




