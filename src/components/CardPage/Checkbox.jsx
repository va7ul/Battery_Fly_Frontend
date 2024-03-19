import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from 'react-redux';
import { selectOneProduct, selectSelectedHolder, selectSelectedSealing,selectOneProductPrice, selectQuantityOrders, selectSealingPrice} from '../../redux/products/productsSelectors';
import { setPrice, setSelectedHolder, setSelectedSealing, setSealingPrice } from '../../redux/products/oneProductSlice';
import { themeMUI } from '../../styles/GlobalStyled';
import { yellow } from '@mui/material/colors';
import { Subtitle, Container } from './Card.styled';
import { useEffect } from 'react';

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
    const { price, capacity, capacityKey, holder } = useSelector(selectOneProduct);
    const oneProductPrice = useSelector(selectOneProductPrice);
    const selectedSealing = useSelector(selectSelectedSealing);
    const selectedHolder = useSelector(selectSelectedHolder);
    const quantityOrders = useSelector(selectQuantityOrders);
    const sealingPrice = useSelector(selectSealingPrice);

    useEffect(() => {
                dispatch(setSealingPrice(100*quantityOrders))
        
    },[quantityOrders, dispatch])

    const handleSealing = (e) => {
        if (e.target.checked) {   
            dispatch(setSelectedSealing(true))
            if (typeof price === 'number' && e.target.checked) {
                dispatch(setPrice(price + sealingPrice))

            };
            return;
        };
        dispatch(setSelectedSealing(false))
        if (typeof price === 'number' && !e.target.checked) {
            
            dispatch(setPrice(price - sealingPrice));
           
        };
    };

    const handleHolder = (e) => {
        if (e.target.checked) {
            dispatch(setSelectedHolder(true))
            if (typeof price === 'number' && e.target.checked) {
                dispatch(setPrice(price + (capacity[capacityKey].holder * 2)));
            };
            return
        };
        dispatch(setSelectedHolder(false))
        if (typeof price === 'number' && !e.target.checked) {
            dispatch(setPrice(price - (capacity[capacityKey].holder * 2)));
        };
    };

    return (
        <Container>
            <Subtitle>Додаткові послуги:</Subtitle>
            <StyledFormGroup>
                <FormControlLabel control={<StyledCheckbox
                    value={selectedSealing}
                    checked={selectedSealing}
                    onChange={handleSealing}
                    disabled={typeof oneProductPrice === "string"}
                    sx={{
                        color: yellow[800],
                        '&.Mui-checked': {
                            color: yellow[800],
                        },
                    }} />} label="Герметизація" />
                {holder && <FormControlLabel control={<StyledCheckbox
                    onChange={handleHolder}
                    checked={selectedHolder}
                    value={selectedHolder}
                    disabled={typeof oneProductPrice === "string"}
                    sx={{
                        color: yellow[800],
                        '&.Mui-checked': {
                            color: yellow[800],
                        },
                    }} />} label="Використовувати холдери" />}
               
            </StyledFormGroup>
        </Container>
    );
};