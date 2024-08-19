import { useMediaQuery } from 'react-responsive';
import { debounce } from 'lodash';
import { useCallback, useMemo, useRef, useState, ChangeEvent } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../../redux/hooks';
import Select, { SingleValue } from 'react-select';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import { yellow } from '@mui/material/colors';
import { changeCity, changeWarehouse, changeDeliveryType, changePayment } from '../../../redux/order/orderSlice';
import { getDeliveryCities, getDeliveryWarehouses } from '../../../redux/order/orderOperations';
import { selectCities, selectWarehouses, selectCity, selectPayment } from '../../../redux/order/orderSelectors';
import { selectDelivery } from '../../../redux/user/userSelectors';
import { Button, ButtonBox, Title, TextNp, NPTitle, NPText, NPIcon, BoxAddress, BoxIcon, Text, Address, BoxNP, selectStyles } from './Delivery.styled';
import { StyledRadioGroup, StyledRadio } from './Delivery.mui';
import { Option } from '../../../@types/customSelect.types';
import sprite from '../../../assets/images/sprite.svg';

type Display = "none" | "flex";

export const Delivery = () => {
    const dispatch = useTypedDispatch();
    const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });

    const [displayNP, setDisplayNP] = useState<Display>("none");
    const [displayAddress, setDisplayAddress] = useState<Display>("none");
    const [showNP, setShowNP] = useState(false);
    const [showAddress, setShowAddress] = useState(false);

    let cities = useTypedSelector(selectCities);
    let warehouses = useTypedSelector(selectWarehouses);
    const city = useTypedSelector(selectCity);
    const payment = useTypedSelector(selectPayment);
    const delivery = useTypedSelector(selectDelivery);


    const selectInputCityRef = useRef<any>(null);
    const selectInputWarehouseRef = useRef<any>(null);

    const openNP = () => {
        if (delivery.city) {
            dispatch(changeCity(delivery.city));
            dispatch(changeWarehouse(delivery.warehouse));
            if (selectInputCityRef.current && selectInputWarehouseRef.current) {
                selectInputCityRef.current.setValue({ value: delivery.city, label: delivery.city })
                selectInputWarehouseRef.current.setValue({ value: delivery.warehouse, label: delivery.warehouse })
            }
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

    const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
        dispatch(changePayment(event.target.value));
    };

    const optionsCities: Option[] = cities.map(city => {
        return {
            value: city, label: city
        };
    });
    
    const debouncedGetCities = useMemo(
        () =>
            debounce((value: string) => dispatch(getDeliveryCities(value)), 1000),
        [dispatch]
    );

    const optionsWarehouses: Option[] = warehouses.map(warehouse => {
        return {
            value: warehouse, label: warehouse
        };
    });

    const handleCityChange = (event: SingleValue<Option>) => {
        if (event) {
            dispatch(changeCity(event.value));
            if (event.value !== '') {
                dispatch(getDeliveryWarehouses(event.value));
            }
        }
    };

    const handleWarehouseChange = (event: SingleValue<Option>) => {
        if (event) {
            dispatch(changeWarehouse(event.value));
        }
    };

  const handleSelectCity = useCallback(
    (inputValue: string) => {
      if (inputValue !== '') {
        debouncedGetCities(inputValue);
      }
    },
    [debouncedGetCities]
  );

    const clearInputCity = () => {
        dispatch(changeCity(''));
        dispatch(changeWarehouse(''));
        if (selectInputCityRef.current && selectInputWarehouseRef.current) {
            selectInputCityRef.current.setValue('');
            selectInputWarehouseRef.current.setValue('');
        }
    };

    const clearInputWarehouse = () => {
        dispatch(changeWarehouse(''));
        if (selectInputWarehouseRef.current) {
            selectInputWarehouseRef.current.setValue('');
        }
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