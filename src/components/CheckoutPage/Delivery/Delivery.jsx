import { useMediaQuery } from 'react-responsive';
import { debounce } from 'lodash';
import { useCallback, useMemo, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { yellow } from '@mui/material/colors';
import { changeCity, changeWarehouse, changeDeliveryType, changePayment } from '../../../redux/order/orderSlice';
import { getDeliveryCities, getDeliveryWarehouses } from '../../../redux/order/orderOperations';
import { selectCities, selectWarehouses, selectCity, selectPayment } from '../../../redux/order/orderSelectors';
import { selectDelivery } from '../../../redux/user/userSelectors';
import { Button, ButtonBox, Title, TextNp, NPTitle, NPText, NPIcon, BoxAddress, BoxIcon, Text, Address, BoxNP, selectStyles } from './Delivery.styled';
import {StyledRadioGroup, StyledRadio} from '../Delivery/Delivery.mui'
import sprite from '../../../assets/images/sprite.svg';

export const Delivery = () => {
    const dispatch = useDispatch();
    const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

    const [displayNP, setDisplayNP] = useState("none");
    const [displayAddress, setDisplayAddress] = useState("none");
    const [showNP, setShowNP] = useState(false);
    const [showAddress, setShowAddress] = useState(false);

    let cities = useSelector(selectCities);
    let warehouses = useSelector(selectWarehouses);
    const city = useSelector(selectCity);
    const payment = useSelector(selectPayment);
    const delivery = useSelector(selectDelivery);

    const selectInputCityRef = useRef();
    const selectInputWarehouseRef = useRef();

    const openNP = () => {
        if (delivery.city) {
            dispatch(changeCity(delivery.city));
            dispatch(changeWarehouse(delivery.warehouse));
            selectInputCityRef.current.setValue({ value: delivery.city, label: delivery.city })
            selectInputWarehouseRef.current.setValue({ value: delivery.warehouse, label: delivery.warehouse })
        }
        setDisplayAddress("none");
        setDisplayNP("flex");
        dispatch(changeDeliveryType("Нова пошта"));
        setShowNP(true);
        setShowAddress(false);
    };

    const openAddress = () => {
        setDisplayNP("none");
        setDisplayAddress("flex");
        dispatch(changeDeliveryType("Самовивіз"));
        dispatch(changeCity("м. Львів"))
        dispatch(changeWarehouse("вул. Зелена, 109"));
        setShowAddress(true);
        setShowNP(false);
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

        if (event.value === '' || {}) {
            return;
        }
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

    const clearInputCity = () => {
        dispatch(changeCity(''));
        dispatch(changeWarehouse(''));
        selectInputCityRef.current.setValue('');
        selectInputWarehouseRef.current.setValue('');
    };

    const clearInputWarehouse = () => {
        dispatch(changeWarehouse(''));
        selectInputWarehouseRef.current.setValue('');
        if (city) {
            dispatch(getDeliveryWarehouses(city));
        }
    };

    return (
        <div>
            <Title>Спосіб доставки</Title>
            <ButtonBox>
                <Button
                    onClick={openNP}
                    $show={showNP}
                >
                    <NPTitle>
                        <NPIcon>
                            <use href={`${sprite}#nova_poshta`}></use>
                        </NPIcon>
                        <NPText>Нова пошта</NPText>
                    </NPTitle>
                </Button>
                <Button
                    onClick={openAddress}
                    $show={showAddress}
                >
                    Самовивіз</Button>
            </ButtonBox>
            <BoxNP style={{ display: displayNP }}>
                <TextNp>Адреса доставки</TextNp>
            
                <Select
                    ref={selectInputCityRef}
                    options={optionsCities}
                    onChange={handleCityChange}
                    onInputChange={handleSelectCity}
                    onFocus={clearInputCity}
                    placeholder={"Місто"}
                    styles={selectStyles}
                />
                <Select
                    ref={selectInputWarehouseRef}
                    options={optionsWarehouses}
                    onChange={handleWarehouseChange}
                    onFocus={clearInputWarehouse}
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
            <div>
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
            </div>
        </div>
    );
};