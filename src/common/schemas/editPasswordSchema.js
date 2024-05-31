import * as Yup from 'yup';

export const editPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Пароль має бути не менший 8 символів')
    .max(20, 'Пароль має бути не довший 20 символів')
    .trim('Введіть старий пароль, будь ласка')
    .required('Введіть старий пароль, будь ласка'),
  newPassword: Yup.string()
    .notOneOf(
      [Yup.ref('password'), null],
      'Старий і новий паролі не мають співпадати'
    )
    .min(8, 'Пароль має бути не менший 8 символів')
    .max(20, 'Пароль має бути не довший 20 символів')
    .trim('Введіть пароль, будь ласка')
    .required('Введіть пароль, будь ласка'),
  newPasswordConfirmation: Yup.string()
    .oneOf([Yup.ref('newPassword'), null], 'Новий пароль не підтверджено')
    .required('Підтвердіть новий пароль, будь ласка'),
});
