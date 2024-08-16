import Select, { SingleValue } from 'react-select';
import { useState } from 'react';
import { useTypedDispatch, useTypedSelector } from 'redux/hooks';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { setPrice, setCapacityKey, setPriceOneProduct, setSelectedHolder, setSelectedSealing, setQuantityOrders, setPriceWithSale } from '../../redux/products/oneProductSlice';
import { CapacityBox, Subtitle, Desc, selectStyles } from "./Card.styled";

type Option = {
  value: string;
  label: string;
};

export const Capacity = () => {

    const dispatch = useTypedDispatch();
    const { capacity, discount } = useTypedSelector(selectOneProduct);

    const capacityKeys = capacity ? Object.keys(capacity) : [];
    const sortKeys = [...capacityKeys].sort((a, b) => Number(a) - Number(b));

    const options: Option[] = sortKeys.map((item) => {
        return {
            value: item, label: item + " Ah",
        }
    })
    
    const [descr, setDescr] = useState('');

    const handleSelect = (option: SingleValue<Option>) => {
        if (!option || !capacity) return;
        const value = option.value;
        setDescr(capacity[value].description);
        dispatch(setPrice(capacity[value].price));
        dispatch(setPriceOneProduct(capacity[value].price));
        dispatch(setSelectedHolder(false));
        dispatch(setSelectedSealing(false));
        dispatch(setCapacityKey(value));
        dispatch(setQuantityOrders(1));
        dispatch(setPriceWithSale(capacity[value]?.price * ((100-discount)/100) || 0))
    };

    const newDescr = descr.split(';');

    return (
        <CapacityBox>
            <Subtitle>Ємність енергії:</Subtitle>
            <Select options={options}
                onChange={handleSelect}
                placeholder={"Виберіть ємність"}
                isSearchable={false}
                styles={selectStyles}
            />
            <Desc>{newDescr.map(item => <li key={item}>{item}</li>)}</Desc>
        </CapacityBox>
    );
};