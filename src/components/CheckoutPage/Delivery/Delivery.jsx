import { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { styled } from '@mui/material/styles';
import { themeMUI } from '../../../styles/GlobalStyled';
// import FormLabel from '@mui/material/FormLabel';
import { yellow } from '@mui/material/colors';
import { Button, ButtonBox, Title } from './Delivery.styled';

const StyledRadioGroup = styled(RadioGroup)({
    gap: '5px',
     [themeMUI.breakpoints.only('desktop')]: {
            gap: '20px',
        },
    '& .MuiButtonBase-root': {
        padding: '0px 10px 0px 0px'
    },
    '& .MuiFormControlLabel-root': {
        margin: 0,
        alignItems: "flex-start",
    },
    '& .MuiTypography-root': {
        fontSize: '10px',
        [themeMUI.breakpoints.only('desktop')]: {
            fontSize: '20px',
        },
    }
});

const StyledRadio = styled(Radio)({
    '& .MuiSvgIcon-root': {
        width: '16px',
        height: '16px',
        [themeMUI.breakpoints.only('desktop')]: {
            width: '30px',
            height: '30px',
        },
    },
});

export const Delivery = () => {
  const [value, setValue] = useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    return (
        <div>
            <Title>Спосіб доставки</Title>
            <ButtonBox>
                <Button>Нова пошта</Button>
                <Button>Самовивіз</Button>
            </ButtonBox>
            <Title>Спосіб оплати</Title>
   <FormControl>
      {/* <FormLabel id="demo-controlled-radio-buttons-group">Спосіб оплати</FormLabel> */}
      <StyledRadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
      >
                    <FormControlLabel value="card" control={<StyledRadio
                         sx={{
                        color: yellow[700],
                        '&.Mui-checked': {
                            color: yellow[800],
                        },
                    }}
                    />} label="Картою по реквізитах фізичних осіб" />
                    <FormControlLabel value="account" control={<StyledRadio
                     sx={{
                        color: yellow[700],
                        '&.Mui-checked': {
                            color: yellow[800],
                        },
                    }}
                    />} label="Рахунок для юридичних осіб або ФОП" />
                    <FormControlLabel value="cash" control={<StyledRadio
                     sx={{
                        color: yellow[700],
                        '&.Mui-checked': {
                            color: yellow[800],
                        },
                    }}
                    />} label="Накладений платіж (при замовленні індивідуальної збірки, передоплата 20%)" />
                    
      </StyledRadioGroup>
    </FormControl>
        </div>
    );
};