import { useMediaQuery } from 'react-responsive';
import { debounce } from 'lodash';
import Select from 'react-select';
import { useCallback, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';
import { themeMUI } from '../../../styles/GlobalStyled';
import { changeCity, changeWarehouse, changeCities, changeDeliveryType, changePayment } from '../../../redux/order/orderSlice';
import { getDeliveryCities, getDeliveryWarehouses } from '../../../redux/order/orderOperations';
import { selectCities, selectWarehouses, selectCity, selectWarehouse, selectPayment } from '../../../redux/order/orderSelectors';
import { Button, ButtonBox, Title, TextNp, NPTitle, NPText, NPIcon, BoxAddress, BoxIcon, Text, Address, Box, BoxNP, selectStyles} from './Delivery.styled';
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
    const dispatch = useDispatch();
    const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

    const [displayNP, setDisplayNP] = useState("none");
    const [displayAddress, setDisplayAddress] = useState("none");
    
    let cities = useSelector(selectCities);
    let warehouses = useSelector(selectWarehouses);
    const city = useSelector(selectCity);
    const warehouse = useSelector(selectWarehouse);
    const payment = useSelector(selectPayment);

    const openNP = () => {
        setDisplayAddress("none");
        setDisplayNP("flex");
        dispatch(changeDeliveryType("Нова пошта"));
        
    };

    const openAddress = () => {
        setDisplayNP("none");
        setDisplayAddress("flex");
        dispatch(changeDeliveryType("Самовивіз"));

    };

    const handleRadioChange = (event) => {
        dispatch(changePayment(event.target.value));
    };

    const optionsCities = cities.map(city => {
        return {
            value: city, label: city
        };
    });
    
    const debouncedGetCities = useMemo(
        () =>
            debounce(value => dispatch(getDeliveryCities(value)), 1000),
        [dispatch]
    );

    const optionsWarehouses = warehouses.map(warehouse => {
        return {
            value: warehouse, label: warehouse
        };
    });

    const handleCityChange = (event) => {
        dispatch(changeCity(event.value));
        dispatch(changeCities(event.value));
        dispatch(getDeliveryWarehouses(event.value));
    };

    const handleWarehouseChange = (event) => {
        dispatch(changeWarehouse(event.value));
    };

    
    const handleSelectCity = useCallback(event => {
        if (event === '') {
            return;
        };
        debouncedGetCities(event);
    },
        [debouncedGetCities]);

    const handleSelectWarehouse = (event) => {
        console.log(event);
    };

    const clearInputCity = () => {
        dispatch(changeCity(''));
        dispatch(changeWarehouse(''));
    };

    return (
        <div>
            <Title>Спосіб доставки</Title>
            <ButtonBox>
                <Button onClick={openNP}>
                    <NPTitle>
                        <NPIcon>
                            <use href={`${sprite}#nova_poshta`}></use>
                        </NPIcon>
                        <NPText>Нова пошта</NPText>
                    </NPTitle>
                </Button>
                <Button onClick={openAddress}>Самовивіз</Button>
            </ButtonBox>
            <BoxNP style={{ display: displayNP }}>
                <TextNp>Адреса доставки</TextNp>
            
                <Select
                    options={optionsCities}
                    defaultValue={city}
                    onInputChange={handleSelectCity}
                    onChange={handleCityChange}
                    onFocus={clearInputCity}
                    placeholder={"Місто"}
                    styles={selectStyles}
                />
                <Select
                    options={optionsWarehouses}
                    defaultValue={warehouse}
                    onChange={handleWarehouseChange}
                    onInputChange={handleSelectWarehouse}
                    placeholder={"Відділення/поштомат"}
                    styles={selectStyles}
                />

            </BoxNP>
            <BoxAddress style={{ display: displayAddress }}>
                <Text>Адреса для самовивозу:</Text>
                <BoxIcon>
                    {mobileVersion ? <LocationCityIcon sx={{ fontSize: 22, fill: 'rgba(244, 170, 0, 1)' }} /> : <LocationCityIcon sx={{ fontSize: 30, fill: 'rgba(244, 170, 0, 1)' }} />}
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
                        value={payment}
                        onChange={handleRadioChange}
                    >
                        <FormControlLabel value="Картою по реквізитах фізичних осіб" control={<StyledRadio
                            sx={{
                                color: yellow[700],
                                '&.Mui-checked': {
                                    color: yellow[800],
                                },
                            }}
                        />} label="Картою по реквізитах фізичних осіб" />
                        <FormControlLabel value="Рахунок для юридичних осіб або ФОП" control={<StyledRadio
                            sx={{
                                color: yellow[700],
                                '&.Mui-checked': {
                                    color: yellow[800],
                                },
                            }}
                        />} label="Рахунок для юридичних осіб або ФОП" />
                        <FormControlLabel value="Накладений платіж" control={<StyledRadio
                            sx={{
                                color: yellow[700],
                                '&.Mui-checked': {
                                    color: yellow[800],
                                },
                            }}
                        />} label="Накладений платіж (при замовленні індивідуальної збірки, передоплата 20%)" />
                    
                    </StyledRadioGroup>
                </FormControl>
            </Box>
        </div>
    );
};