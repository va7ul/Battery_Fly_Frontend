import * as Yup from 'yup';

export const editPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Пароль має бути не менший 8 символів')
    .max(20, 'Пароль має бути не довший 20 символів')
    .trim('Введіть старий пароль, будь ласка')
    .required('Введіть старий пароль, будь ласка'),
  newPassword: Yup.string()
    .min(8, 'Пароль має бути не менший 8 символів')
    .max(20, 'Пароль має бути не довший 20 символів')
    .trim('Підтвердіть новий пароль, будь ласка')
    .required('Підтвердіть новий пароль, будь ласка'),
  newPasswordConfirmation: Yup.string().oneOf(
    [Yup.ref('newPassword'), null],
    'Введений пароль має збігатись з новим паролем'
  ),
});
