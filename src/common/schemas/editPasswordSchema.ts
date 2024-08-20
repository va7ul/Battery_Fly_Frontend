import * as Yup from 'yup';

export const editPasswordSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Пароль має бути не менший 8 символів')
    .max(20, 'Пароль має бути не довший 20 символів')
    .required('Введіть старий пароль, будь ласка')
    .trim(),
  newPassword: Yup.string()
    .notOneOf(
      [Yup.ref('password'), null],
      'Старий і новий паролі однакові'
    )
    .min(8, 'Пароль має бути не менший 8 символів')
    .max(20, 'Пароль має бути не довший 20 символів')
    .required('Введіть пароль, будь ласка')
    .trim(),
  newPasswordConfirmation: Yup.string()
    .oneOf([Yup.ref('newPassword')], 'Новий пароль не підтверджено')
    .required('Підтвердіть новий пароль, будь ласка')
    .trim(),
});
