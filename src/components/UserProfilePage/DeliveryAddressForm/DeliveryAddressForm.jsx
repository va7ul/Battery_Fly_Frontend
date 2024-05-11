import Select from 'react-select';
import { useCallback, useMemo } from 'react';
import { debounce } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectCities,
  selectCity,
  selectWarehouse,
  selectWarehouses,
} from '../../../redux/order/orderSelectors';
import {
  getDeliveryCities,
  getDeliveryWarehouses,
} from '../../../redux/order/orderOperations';
import { changeCity, changeWarehouse } from '../../../redux/order/orderSlice';
import {Box, BtnWrapper, CancelBtn, SubmitAddressBtn, Text, selectStyles } from './DeliveryAddressForm.styled';


export const DeliveryAddressForm = ({ handleShowForm }) => {
  const dispatch = useDispatch();

  let cities = useSelector(selectCities);
  const city = useSelector(selectCity);
  const warehouse = useSelector(selectWarehouse);
  let warehouses = useSelector(selectWarehouses);

  const optionsCities = cities.map(city => {
    return {
      value: city,
      label: city,
    };
  });

  const getCity = () => {
    return city ? optionsCities.find(c => c.value === city) : '';
  };

  const debouncedGetCities = useMemo(
    () => debounce(value => dispatch(getDeliveryCities(value)), 1000),
    [dispatch]
  );

  const handleCityChange = event => {
    dispatch(changeCity(event.value));
    dispatch(getDeliveryWarehouses(event.value));
  };

  const handleSelectCity = useCallback(
    event => {
      if (event === '') {
        return;
      }
      debouncedGetCities(event);
    },
    [debouncedGetCities]
  );

  const clearInputCity = () => {
    dispatch(changeCity(''));
    dispatch(changeWarehouse(''));
  };

  const optionsWarehouses = warehouses.map(warehouse => {
    return {
      value: warehouse,
      label: warehouse,
    };
  });
  const getWarehouse = () => {
    return warehouse ? optionsWarehouses.find(w => w.value === warehouse) : '';
  };

  const handleWarehouseChange = event => {
    dispatch(changeWarehouse(event.value));
  };

  const clearInputWarehouse = () => {
    dispatch(changeWarehouse(''));
  };

  return (
    <>
      <Text>Додати адресу </Text>
      <Box>
        <Select
          options={optionsCities}
          value={getCity()}
          onChange={handleCityChange}
          onInputChange={handleSelectCity}
          onFocus={clearInputCity}
          placeholder={'Місто'}
          styles={selectStyles}
        />
        <Select
          options={optionsWarehouses}
          value={getWarehouse()}
          onChange={handleWarehouseChange}
          onFocus={clearInputWarehouse}
          placeholder={'Відділення/поштомат'}
          styles={selectStyles}
        />
      </Box>
      <BtnWrapper>
        <SubmitAddressBtn type="submit">Зберегти адресу</SubmitAddressBtn>
        <CancelBtn type="button" onClick={handleShowForm}>
          Відмінити
        </CancelBtn>
      </BtnWrapper>
    </>
  );
};
