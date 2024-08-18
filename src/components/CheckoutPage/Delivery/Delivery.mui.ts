import { styled } from '@mui/material/styles';
import { themeMUI } from 'styles/themeMUI';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

export const StyledRadioGroup = styled(RadioGroup)({
  gap: '5px',
  '& .MuiButtonBase-root': {
    padding: '0px 5px 0px 0px',
    [themeMUI.breakpoints.only('desktop')]: {
      padding: '0px 10px 0px 0px',
    },
  },
  '& .MuiFormControlLabel-root': {
    margin: 0,
    alignItems: 'flex-start',
    [themeMUI.breakpoints.only('desktop')]: {
      alignItems: 'baseline',
    },
  },
  '& .MuiTypography-root': {
    fontSize: '10px',
    [themeMUI.breakpoints.only('desktop')]: {
      fontSize: '20px',
    },
  },
});

export const StyledRadio = styled(Radio)({
  '& .MuiSvgIcon-root': {
    width: '16px',
    height: '16px',
    [themeMUI.breakpoints.only('desktop')]: {
      width: '18px',
      height: '18px',
    },
  },
});
