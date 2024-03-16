import * as Yup from 'yup';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { nameRegex } from '../regex';

export const schema = Yup.object({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(70, 'Too Long!')
    .trim('Enter your name, please')
    .matches(nameRegex, 'Name is not valid')
    .required('Required'),
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