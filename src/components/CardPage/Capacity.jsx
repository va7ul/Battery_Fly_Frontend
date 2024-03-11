import Select from 'react-select';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { setPrice } from '../../redux/products/oneProductSlice';
import { CapacityBox, Subtitle, Desc } from "./Card.styled";

const selectStyles = {
    control: (styles) => ({
        ...styles, backgroundColor: 'rgba(225, 225, 225, 1)', borderRadius: '6px', borderStyle: 'none', width: '106px', maxHeight: '30px', minHeight: '25px', border: '1px solid rgb(31, 31, 31)',
        ':hover': { borderColor: 'currentColor', boxShadow: 'none' },
    }),
    menu: (styles) => ({ ...styles, backgroundColor: 'rgba(225, 225, 225, 1)', fontSize: '10px', width: '106px' }),
    input: (styles) => ({ ...styles, display: 'none' }),
    option: (styles, { isDisabled, isFocused, isSelected }) => {
        return {
            ...styles,
            backgroundColor: isFocused
                ? 'rgb(255, 208, 100)'
                : undefined,
            color: !isDisabled
                ? isSelected
                    ? 'rgb(31, 31, 31);'
                    : 'rgb(31, 31, 31);'
                : undefined,
            cursor: isDisabled ? 'not-allowed' : 'default',
            padding: '2px 8px',
            ':active': {
                ...styles[':active'],
                backgroundColor: !isDisabled
                    ? isSelected
                        ? 'rgb(255, 208, 100)'
                        : 'rgb(255, 208, 100)'
                    : undefined,
            },
        };
    
    },
    placeholder: (styles) => ({ ...styles, fontSize: '10px', padding: '0px 8px' }),
    indicatorsContainer: (styles) => ({
        ...styles, height: '30px', width: '38px'
    }),
    valueContainer: (styles) => ({ ...styles, padding: 0 }),
    singleValue: (styles) => ({ ...styles, fontSize: '10px', margin: 0, padding: '8px' }),

};

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
                styles={selectStyles}
            />
            <Desc>{newDescr.map(item => <li key={item}>{item}</li>)}</Desc>
        </CapacityBox>
    );
};