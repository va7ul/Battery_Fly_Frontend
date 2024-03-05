import { useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import { useDispatch, useSelector } from 'react-redux';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { getOneProduct } from '../../redux/products/productsOperations';
import { CheckBox } from './Checkbox';
import { Capacity } from './Capacity';
import { Information } from './Information';
import { Order } from './Order';
import {
    Wrapper,
    Box,
  Title,
  Image
} from './Card.styled';
import { Description } from './Description';

export const Card = () => {
    const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });
    const dispatch = useDispatch();
    
    const { name, image, information } = useSelector(selectOneProduct);

    useEffect(() => {
        dispatch(getOneProduct('0099'));
    }, [dispatch]);

    return (
        mobileVersion ? (<Wrapper>
            <Title>{name}</Title>
            <Image src={image} alt={name} />
               
            <Description />
            <Capacity />
            <CheckBox />
            <Order />

            {information ? (<Information information={information} />) : (undefined)}
             
        </Wrapper>
        ) : (
            <Wrapper>
                <Title>{name}</Title>
                <Box>
                    <Image src={image} alt={name} />
                    <Description />
                </Box>
                <Capacity />
                <CheckBox />
                <Order />
                {information ? (<Information information={information} />) : (undefined)}
                
            </Wrapper>
        )
    );
};