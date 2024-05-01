import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { LiaPenAltSolid } from 'react-icons/lia';
import Button from '@mui/material/Button';
import { Formik } from 'formik';
import {
  Box,
  FormikWrapper,
  Label,
  StyledErrorMessage,
  StyledField,
  StyledForm,
} from './PasswordEditForm.styled';
import { editPasswordSchema } from 'common/schemas/editPasswordSchema';

export default function PasswordEditForm() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<LiaPenAltSolid />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            '& .MuiAccordionSummary-content': {
              fontSize: '12px',
              fontWeight: '500',
              padding: '0px 8px',
            },
            '& .MuiAccordionSummary-expandIconWrapper': {
              svg: {
                width: '16px',
                height: '16px',
                fill: themeMUI => themeMUI.palette.text.primary,
              },
              '&.Mui-expanded': {
                transform: 'rotate(0)',
              },
            },

            '&:hover, &:focus': {
              color: themeMUI => themeMUI.palette.hoverColor.main,
              svg: {
                fill: themeMUI => themeMUI.palette.hoverColor.main,
              },
              transition: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
          }}
        >
          Змінити пароль
        </AccordionSummary>
        <AccordionDetails>
          <FormikWrapper>
            <Formik
              initialValues={{
                password: '',
                newPassword: '',
                newPasswordConfirmation: '',
              }}
              validationSchema={editPasswordSchema}
              onSubmit={(values, _) => {
                console.log('values', values);
              }}
            >
              <StyledForm>
                <Label>
                  Старий пароль
                  <Box>
                    <StyledField name="password" type="password" />
                    <StyledErrorMessage name="password" component="div" />
                  </Box>
                </Label>
                <Label>
                  Новий пароль
                  <Box>
                    <StyledField name="newPassword" type="password" />
                    <StyledErrorMessage name="newPassword" component="div" />
                  </Box>
                </Label>
                <Label>
                  Підтвердити новий пароль
                  <Box>
                    <StyledField
                      name="newPasswordConfirmation"
                      type="password"
                    />
                    <StyledErrorMessage
                      name="newPasswordConfirmation"
                      component="div"
                    />
                  </Box>
                </Label>
              </StyledForm>
            </Formik>
          </FormikWrapper>
        </AccordionDetails>
        <AccordionActions>
          <Button>Зберегти</Button>
          <Button>Відхилити</Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
