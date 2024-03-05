import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Subtitle } from './Card.styled';

const StyledFormGroup = styled(FormGroup)({

    '& .MuiTypography-root': {
        fontSize: '10px',
        fontFamily: 'themeMUI.typography.fontFamily'
}
//   '& .MuiPaper-root': {
//     borderRadius: 12,
//     marginTop: '26px',
//     backgroundColor: '#0F0F0F',
//     boxShadow: '0px 4px 14px 0px rgba(227, 255, 168, 0.20)',
//     [theme.breakpoints.down('tablet')]: {
//       maxHeight: '100%',
//       height: '100vh',
//       marginTop: '60px',
//       maxWidth: '100vw',
//       boxShadow: 'none',
//       backgroundColor: '#050505',
//       position: 'static',
//     },
//   },
//   '& .MuiList-root': {
//     width: '392px',
//     height: '352px',
//     padding: '20px 0px 40px 24px',
//     position: 'relative',
//     [theme.breakpoints.down('tablet')]: {
//       width: '320px',
//       padding: '0px 0px',
//       margin: '0 auto',
//     },
//   },
});

export const CheckBox = () => {
    return (
        <div>
            <Subtitle>Додаткові послуги:</Subtitle>
            {/* <div> */}
            <StyledFormGroup sx={{
                flexDirection: 'row', gap: '30px'
            }}>
                <FormControlLabel control={<Checkbox size='sm' sx={{
                    color: yellow[800],
                    '&.Mui-checked': {
                        color: yellow[800],
                    },
                }} />} label="Герметизація" />
                <FormControlLabel control={<Checkbox size='sm' sx={{
                    color: yellow[800],
                    '&.Mui-checked': {
                        color: yellow[800],
                    },
                    // '&.MuiFormControlLabel-label': {
                    //     fontSize: '10px',
                    // }
                }} />} label="Використовувати холдери" />
            </StyledFormGroup>
            {/* <FormControlLabel control={<Checkbox size="sm"
                                sx={{
                                    color: yellow[800],
                                    '&.Mui-checked': {
                                        color: yellow[800],
                                    },
                                }} />} label="Використовувати холдери" /> */}
                 

            {/* </div> */}
        </div>
    );
};