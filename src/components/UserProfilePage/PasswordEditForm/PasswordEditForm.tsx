import { FC, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import toast from 'react-hot-toast';
import { Formik } from 'formik';
import { LiaPenAltSolid } from 'react-icons/lia';
import Accordion from '@mui/material/Accordion';
import AccordionActions from '@mui/material/AccordionActions';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { IconButton } from '@mui/material';
import Button from '@mui/material/Button';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { editPasswordSchema } from 'common/schemas/editPasswordSchema';
import { changePassword } from 'api';
import {
  Box,
  FormikWrapper,
  Label,
  StyledErrorMessage,
  StyledField,
  StyledForm,
} from './PasswordEditForm.styled';

export const PasswordEditForm: FC = () => {

  const isBigScreen = useMediaQuery({ query: '(min-width: 1280px)' });

  const [expanded, setExpanded] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showNewPasswordConfirmation, setShowNewPasswordConfirmation] =
    useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleExpansion = () => {
    setExpanded(expanded => !expanded);
  };
  const handleClickShowPassword = () => setShowPassword(show => !show);
  const handleClickShowNewPassword = () => setShowNewPassword(show => !show);
  const handleClickShowNewPasswordConfirmation = () =>
    setShowNewPasswordConfirmation(show => !show);
  return (
    <div>
      <Accordion
        sx={{
          '&.MuiPaper-root': {
            maxWidth: '690px',
          },
        }}
        expanded={expanded}
        onChange={handleExpansion}
      >
        <AccordionSummary
          expandIcon={<LiaPenAltSolid />}
          aria-controls="panel3-content"
          id="panel3-header"
          sx={{
            '& .MuiAccordionSummary-content': {
              fontSize: !isBigScreen ? '12px' : '16px',
              fontWeight: '500',
              padding: !isBigScreen ? '0px 8px' : '0px 24px',
            },
            '& .MuiAccordionSummary-expandIconWrapper': {
              svg: {
                width: !isBigScreen ? '16px' : '24px',
                height: !isBigScreen ? '16px' : '24px',
                fill: themeMUI => themeMUI.palette.text.primary,
              },
              '&.Mui-expanded': {
                transform: 'rotate(0)',
              },
            },

            '&:hover, &:focus': {
              color: themeMUI =>
                themeMUI.palette.hoverColor.main,
              svg: {
                fill: themeMUI =>
                  themeMUI.palette.hoverColor.main,
              },
              transition: '500ms cubic-bezier(0.4, 0, 0.2, 1)',
            },
          }}
        >
          Змінити пароль
        </AccordionSummary>
        <AccordionDetails
          sx={{
            '&.MuiAccordionDetails-root': {
              padding: !isBigScreen ? '8px' : '16px',
            },
          }}
        >
          <FormikWrapper>
            <Formik
              initialValues={{
                password: '',
                newPassword: '',
                newPasswordConfirmation: '',
              }}
              validationSchema={editPasswordSchema}
              onSubmit={async (values, actions) => {
                setIsLoading(true);
                const toastId = toast.loading('Збереження...');
                const response = await changePassword({
                  password: values.password.trim(),
                  newPassword: values.newPassword.trim(),
                });
                setIsLoading(false);
                toast.dismiss(toastId);
                if (response) {
                  handleExpansion();
                  actions.resetForm();
                }
              }}
            >
              <StyledForm id="form-change-password">
                <Label>
                  Старий пароль
                  <Box>
                    <StyledField
                      name="password"
                      maxLength="21"
                      type={showPassword ? 'text' : 'password'}
                    />
                    <IconButton
                      sx={{
                        '&.MuiIconButton-root': {
                          position: 'absolute',
                          top: !isBigScreen ? '0px' : '4px',
                          right: '4px',
                          padding: '2px',
                        },
                      }}
                      onClick={handleClickShowPassword}
                    >
                      {!showPassword ? (
                        <VisibilityOff
                          sx={{
                            width: isBigScreen ? '20px' : '16px',
                            height: isBigScreen ? '20px' : '16px',
                          }}
                        />
                      ) : (
                        <Visibility
                          sx={{
                            width: isBigScreen ? '20px' : '16px',
                            height: isBigScreen ? '20px' : '16px',
                          }}
                        />
                      )}
                    </IconButton>
                    <StyledErrorMessage name="password" component="div" />
                  </Box>
                </Label>
                <Label>
                  Новий пароль
                  <Box>
                    <StyledField
                      name="newPassword"
                      type={showNewPassword ? 'text' : 'password'}
                      maxLength="21"
                    />
                    <IconButton
                      sx={{
                        '&.MuiIconButton-root': {
                          position: 'absolute',
                          top: !isBigScreen ? '0px' : '4px',
                          right: '4px',
                          padding: '2px',
                        },
                      }}
                      onClick={handleClickShowNewPassword}
                    >
                      {!showNewPassword ? (
                        <VisibilityOff
                          sx={{
                            width: isBigScreen ? '20px' : '16px',
                            height: isBigScreen ? '20px' : '16px',
                          }}
                        />
                      ) : (
                        <Visibility
                          sx={{
                            width: isBigScreen ? '20px' : '16px',
                            height: isBigScreen ? '20px' : '16px',
                          }}
                        />
                      )}
                    </IconButton>
                    <StyledErrorMessage name="newPassword" component="div" />
                  </Box>
                </Label>
                <Label>
                  Підтвердити новий пароль
                  <Box>
                    <StyledField
                      name="newPasswordConfirmation"
                      type={showNewPasswordConfirmation ? 'text' : 'password'}
                      maxLength="21"
                    />
                    <IconButton
                      sx={{
                        '&.MuiIconButton-root': {
                          position: 'absolute',
                          top: !isBigScreen ? '0px' : '4px',
                          right: '4px',
                          padding: '2px',
                        },
                      }}
                      onClick={handleClickShowNewPasswordConfirmation}
                    >
                      {!showNewPasswordConfirmation ? (
                        <VisibilityOff
                          sx={{
                            width: isBigScreen ? '20px' : '16px',
                            height: isBigScreen ? '20px' : '16px',
                          }}
                        />
                      ) : (
                        <Visibility
                          sx={{
                            width: isBigScreen ? '20px' : '16px',
                            height: isBigScreen ? '20px' : '16px',
                          }}
                        />
                      )}
                    </IconButton>
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
          <Button
            sx={{
              '&.MuiButton-root': {
                textTransform: 'none',
                fontSize: !isBigScreen ? '13px' : '20px',
                color: themeMUI => themeMUI.palette.hoverColor.main,
              },
            }}
            type="submit"
            form="form-change-password"
            disabled={isLoading}
          >
            Зберегти
          </Button>
          <Button
            type="button"
            onClick={handleExpansion}
            sx={{
              '&.MuiButton-root': {
                textTransform: 'none',
                fontSize: !isBigScreen ? '13px' : '20px',
                color: themeMUI => themeMUI.palette.text.primary,
              },
            }}
          >
            Відмінити
          </Button>
        </AccordionActions>
      </Accordion>
    </div>
  );
}
