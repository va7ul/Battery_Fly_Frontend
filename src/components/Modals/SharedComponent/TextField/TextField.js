import { TextField, styled } from '@mui/material';

export const Field = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: theme.palette.text.primary,
    borderRadius: '6px',
    [theme.breakpoints.up('desktop')]: {
      borderRadius: '8px',
    },
  },
  '& .MuiOutlinedInput-input': {
    height: '28px',
    padding: '0px 0px',
    [theme.breakpoints.up('desktop')]: {
      height: '51px',
    },
  },
  '& .MuiFormLabel-root': {
    fontFamily: theme.typography.fontFamily,
    fontSize: '10px',
    fontWeight: theme.typography.fontWeightMedium,
    color: theme.palette.text.primary,
    top: '-8px',
    [theme.breakpoints.up('desktop')]: {
      fontSize: '14px',
      top: '0px',
    },
    '&.Mui-focused': {
      fontSize: '10px',
      color: theme.palette.text.primary,
      transform: 'translate(10px, -4px) scale(1)',
      [theme.breakpoints.up('desktop')]: {
        fontSize: '14px',
        transform: 'translate(10px, -18px) scale(1)',
      },
    },
  },
  '& .MuiFormLabel-filled': {
    transform: 'translate(10px, -4px) scale(1)',
    [theme.breakpoints.up('desktop')]: {
      transform: 'translate(10px, -18px) scale(1)',
    },
  },
  '& .MuiInputBase-root': {
    height: '28px',
    padding: '0px 8px',
    fontFamily: theme.typography.fontFamily,
    fontSize: '10px',
    [theme.breakpoints.up('desktop')]: {
      height: '51px',
      padding: '0px 12px',
      fontSize: '14px',
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      border: `2px solid ${theme.palette.secondary.main}`,
    },
  },
  '& .MuiFormLabel-root.Mui-error': {
    fontFamily: theme.typography.fontFamily,
    fontSize: '10px',
    fontWeight: '500',
    color: theme.palette.text.primary,
    transform: 'translate(10px, -6px)',
    [theme.breakpoints.up('desktop')]: {
      fontSize: '14px',
      transform: 'translate(10px, -20px)',
    },
  },
  '& .MuiFormHelperText-root.Mui-error': {
    fontFamily: theme.typography.fontFamily,
    fontSize: '8px',
    fontWeight: '500',
    color: 'rgba(255, 0, 0, 1)',
    [theme.breakpoints.up('desktop')]: {
      fontSize: '12px',
    },
  },
}));
