import * as Yup from 'yup';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { nameRegex } from '../regex';

export const schema = Yup.object({
  name: Yup.string()
    .min(2, "Введіть своє ім'я, будь ласка")
    .max(70, "Введіть своє ім'я, будь ласка")
    .trim("Введіть своє ім'я, будь ласка")
    .matches(nameRegex, "Введіть своє ім'я, будь ласка")
    .required("Введіть своє ім'я, будь ласка"),
});


const phoneUtil = PhoneNumberUtil.getInstance();

export const isPhoneValid = phone => {
  try {
    if (phone === '+380') return true;
    return phoneUtil.isValidNumber(phoneUtil.parseAndKeepRawInput(phone));
  } catch (error) {
    return false;
  }
};