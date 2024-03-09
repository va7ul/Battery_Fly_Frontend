import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { getOneProduct } from '../../redux/products/productsOperations';
import { ProductPhoto } from './ProductPhoto';
import { Description } from './Description';
import { Capacity } from './Capacity';
import { CheckBox } from './Checkbox';
import { Order } from './Order';
import { Information } from './Information';
import {
  Wrapper,
  Box,
  Title,
  Case
} from './Card.styled';

export const Card = () => {
    const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });
    const dispatch = useDispatch();
    
    const { name, capacity, information } = useSelector(selectOneProduct);

    useEffect(() => {
        dispatch(getOneProduct('1002'));
    }, [dispatch]);

    return (
        mobileVersion ? (<Wrapper>

            <Title>{name}</Title>
            <ProductPhoto />
            <Description />
            {capacity ? (<Capacity />) : (undefined)}
            <CheckBox />
            <Order />
            {information ? (<Information information={information} />) : (undefined)}
             
        </Wrapper>
            
        ) : (
                
            <Wrapper>
                <Case>
                    <div>
                        <ProductPhoto />
                        {capacity ? (<Capacity />) : (undefined)}
                    </div>
                    
                    <Box>
                        <Title>{name}</Title>
                        <Description />
                        <CheckBox />
                        <Order />
                    </Box>
                </Case>
                    
                {information ? (<Information information={information} />) : (undefined)}
                
            </Wrapper>
        )
    );
};