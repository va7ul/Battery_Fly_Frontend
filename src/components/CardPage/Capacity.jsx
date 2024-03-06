import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { setPrice } from '../../redux/products/oneProductSlice';
import { CapacityBox, Subtitle, SelectDiv, OptionsItem, Desc } from "./Card.styled";

export const Capacity = () => {
    
    const dispatch = useDispatch();

    const { capacity } = useSelector(selectOneProduct);
    const capacityKeys = Object.keys(capacity);

    const [descr, setDescr] = useState('');
    
    const handleSelect = (e) => {
        setDescr(capacity[e.currentTarget.value].description);
        dispatch(setPrice(capacity[e.currentTarget.value].price));
    }
    
    const newDescr = descr.split(';');

    return (
        <CapacityBox>
            <Subtitle>Ємність енергії:</Subtitle>

            <SelectDiv onChange={handleSelect} name="capacity">
                <OptionsItem>Виберіть опцію</OptionsItem>
                {capacityKeys.map(item => <OptionsItem key={item}>{item}</OptionsItem>)}
            </SelectDiv>
    
            <Desc>{newDescr.map(item => <li key={item}>{item}</li>)}</Desc>
        </CapacityBox>
    );
};