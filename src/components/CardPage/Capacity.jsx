import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { setPrice } from '../../redux/products/oneProductSlice';
import { CapacityBox, Subtitle, SelectDiv, OptionsItem, Desc } from "./Card.styled";

export const Capacity = () => {
    
    const dispatch = useDispatch();

    const { capacity } = useSelector(selectOneProduct);
    const capacityKeys = Object.keys(capacity);
    
    const sortKeys = [...capacityKeys].sort((a, b) => a - b);

    const [descr, setDescr] = useState('');

    const handleSelect = (e) => {
        const value = capacity[e.currentTarget.selectedOptions[0].dataset.value];
        setDescr(value.description);
        dispatch(setPrice(value.price));
        if (value) {
            e.currentTarget.firstChild.setAttribute("disabled", "disabled")
        }
    };

    const newDescr = descr.split(';');

    return (
        <CapacityBox>
            <Subtitle>Ємність енергії:</Subtitle>

            <SelectDiv onChange={handleSelect} name="capacity">
                <OptionsItem>Виберіть опцію</OptionsItem>
                {sortKeys.map(item => <OptionsItem data-value={item} key={item}>{item} Ah</OptionsItem>)}
            </SelectDiv>
    
            <Desc>{newDescr.map(item => <li key={item}>{item}</li>)}</Desc>
        </CapacityBox>
    );
};