import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import { Subtitle, Container } from './Card.styled';

const StyledFormGroup = styled(FormGroup)({
    '& .MuiButtonBase-root': {
        padding: '0px 10px 0px 0px'
    },
    '& .MuiFormControlLabel-root': {
        margin: 0,
    },
    '& .MuiTypography-root': {
        fontSize: '10px',
    }
});

export const CheckBox = () => {
    return (
        <Container>
            <Subtitle>Додаткові послуги:</Subtitle>
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
                }} />} label="Використовувати холдери" />
            </StyledFormGroup>
        </Container>
    );
};