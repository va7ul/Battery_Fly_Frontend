import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { setPrice } from '../../redux/products/oneProductSlice';
import { themeMUI } from '../../styles/GlobalStyled';
import { yellow } from '@mui/material/colors';
import { Subtitle, Container } from './Card.styled';

const StyledFormGroup = styled(FormGroup)({
    flexDirection: 'row',
    flexWrap: 'nowrap',
    gap: '30px',
    '& .MuiButtonBase-root': {
        padding: '0px 10px 0px 0px'
    },
    '& .MuiFormControlLabel-root': {
        margin: 0,
    },
    '& .MuiTypography-root': {
        fontSize: '10px',
        [themeMUI.breakpoints.only('desktop')]: {
            fontSize: '20px',
        },
    }
});

const StyledCheckbox = styled(Checkbox)({
    '& .MuiSvgIcon-root': {
        width: '20px',
        height: '20px',
        [themeMUI.breakpoints.only('desktop')]: {
            width: '30px',
            height: '30px',
        },
    },
});

export const CheckBox = () => {
  const dispatch = useDispatch();
    const { price, capacity, capacityKey } = useSelector(selectOneProduct);

    const handleSealing = (e) => {
        if (typeof price === 'number' && e.currentTarget.checked) {
            dispatch(setPrice(price + 100));    
        }
        if (typeof price === 'number' && !e.currentTarget.checked) {
            dispatch(setPrice(price - 100));
        }
    };

    const handleHolder = (e) => {
           if (typeof price === 'number' && e.currentTarget.checked) {
               dispatch(setPrice(price + (capacity[capacityKey].holder * 2)));
           }
           if (typeof price === 'number' && !e.currentTarget.checked) {
               dispatch(setPrice(price - (capacity[capacityKey].holder * 2)));
        }   
    };

    return (
        <Container>
            <Subtitle>Додаткові послуги:</Subtitle>
            <StyledFormGroup>
                <FormControlLabel control={<StyledCheckbox
                    onChange={handleSealing}
                    sx={{
                    color: yellow[800],
                    '&.Mui-checked': {
                        color: yellow[800],
                    },
                }} />} label="Герметизація" />
                <FormControlLabel control={<StyledCheckbox
                    onChange={handleHolder}
                    sx={{
                    color: yellow[800],
                    '&.Mui-checked': {
                        color: yellow[800],
                    },
                }} />} label="Використовувати холдери" />
            </StyledFormGroup>
        </Container>
    );
};