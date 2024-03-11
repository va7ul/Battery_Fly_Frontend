import Select from 'react-select';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { setPrice } from '../../redux/products/oneProductSlice';
import { CapacityBox, Subtitle, Desc, selectStyles } from "./Card.styled";

export const Capacity = () => {

    const dispatch = useDispatch();
    const { capacity } = useSelector(selectOneProduct);

    const capacityKeys = Object.keys(capacity);
    const sortKeys = [...capacityKeys].sort((a, b) => a - b);

    const options = sortKeys.map((item) => {
        return {
            value: item, label: item + " Ah",
        }
    })
    
    const [descr, setDescr] = useState('');

    const handleSelect = (option) => {
        const value = option.value;
        setDescr(capacity[value].description);
        dispatch(setPrice(capacity[value].price));
    };

    const newDescr = descr.split(';');

    return (
        <CapacityBox>
            <Subtitle>Ємність енергії:</Subtitle>
            <Select options={options}
                onChange={handleSelect}
                placeholder={"Виберіть опцію"}
                styles={selectStyles}
            />
            <Desc>{newDescr.map(item => <li key={item}>{item}</li>)}</Desc>
        </CapacityBox>
    );
};