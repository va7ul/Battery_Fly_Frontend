import { Formik } from 'formik';
import { nameSchema } from '../../common/schemas/nameSchema';

import {
  Btn,
  Label,
  StyledErrorMessage,
  StyledField,
  StyledForm,
} from './SignUpForm.styled';

export const SignUpForm = () => {
    return (
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
        }}
        validationSchema={nameSchema}
        onSubmit={(values, actions) => {
          actions.resetForm();
        }}
      >
        <StyledForm>
          <Label>
            Ім'я
            <StyledField name="firstName" type="text" />
            <StyledErrorMessage name="firstName" component="div" />
          </Label>

          <Label>
            Прізвище
            <StyledField name="lastName" type="text" />
            <StyledErrorMessage name="lastName" component="div" />
          </Label>

          <Label>
            E-пошта
            <StyledField name="email" type="email" />
            <StyledErrorMessage name="email" component="div" />
          </Label>
          <Btn type="submit">
            <div>Зареєструватись</div>
          </Btn>
        </StyledForm>
      </Formik>
    );
};


