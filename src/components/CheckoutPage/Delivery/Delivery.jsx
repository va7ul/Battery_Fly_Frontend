import { useState } from 'react';
import Select from 'react-select';
import { useMediaQuery } from 'react-responsive';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { styled } from '@mui/material/styles';
import { themeMUI } from '../../../styles/GlobalStyled';
import { yellow } from '@mui/material/colors';
import { Button, ButtonBox, Title, NPTitle, NPText, NPIcon, BoxAddress, BoxIcon, Text, Address, OrderButton, Box, BoxNP, selectStyles} from './Delivery.styled';
import sprite from '../../../assets/images/sprite.svg';


const StyledRadioGroup = styled(RadioGroup)({
    gap: '5px',
    '& .MuiButtonBase-root': {
        padding: '0px 5px 0px 0px',
        [themeMUI.breakpoints.only('desktop')]: {
            padding: '0px 10px 0px 0px',
        },
    },
    '& .MuiFormControlLabel-root': {
        margin: 0,
        alignItems: "flex-start",
          [themeMUI.breakpoints.only('desktop')]: {
            alignItems: "baseline",
        },
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
            width: '18px',
            height: '18px',
        },
    },
});

export const Delivery = () => {
    const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

    const [value, setValue] = useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    
    const handleSelectCity = (event) => {
        console.log(event)
    }
    const handleSelectWarehouse = (event) => {
        console.log(event)
    }

    return (
        <div>
            <Title>Спосіб доставки</Title>
            <ButtonBox>
                <Button>
                    <NPTitle>
                        <NPIcon>
                            <use href={`${sprite}#nova_poshta`}></use>
                        </NPIcon>
                        <NPText>Нова пошта</NPText>
                    </NPTitle>
                </Button>
                <Button>Самовивіз</Button>
            </ButtonBox>
            <BoxNP>
                <Text>Адреса доставки</Text>
            
                <Select
                    // options={options}
                    onInputChange={handleSelectCity}
                // onChange=
                placeholder={"Місто"}
                styles={selectStyles}
                />
                <Select
                    options={options}
                    // onChange={handleSelect}
                    onInputChange={handleSelectWarehouse}
                    
                placeholder={"Відділення/поштомат"}
                styles={selectStyles}
            />

                </BoxNP>
            <BoxAddress>
                <Text>Адреса для самовивозу:</Text>
                <BoxIcon>
                    {mobileVersion ? <LocationCityIcon sx={{ fontSize: 22 }} /> : <LocationCityIcon sx={{ fontSize: 30 }} />}
                    <Address
                        href="https://maps.app.goo.gl/HVQb7UZCPnmQ73356"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                    >
                        м. Львів, вул. Зелена, 109
                    </Address>
                </BoxIcon>
                
            </BoxAddress>
            <Title>Спосіб оплати</Title>
            <Box>
                <FormControl>
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
                <OrderButton>
                    <div>Оформити замовлення</div>
                </OrderButton>
            </Box>
        </div>
    );
};