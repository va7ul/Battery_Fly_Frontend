import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { ProductPhoto } from './ProductPhoto';
import { Description } from './Description';
import { Capacity } from './Capacity';
import { CheckBox } from './Checkbox';
import { Order } from './Order';
import { Information } from './Information';
import { setQuantityOrders, setSelectedHolder, setSelectedSealing} from '../../redux/products/oneProductSlice';
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
        dispatch(setQuantityOrders(1));
        dispatch(setSelectedHolder(false));
        dispatch(setSelectedSealing(false));

    }, [dispatch]);


    return (
        mobileVersion ? (<Wrapper>

            <Title>{name}</Title>
            <ProductPhoto />
            <Description />
            {capacity && <Capacity />}
            {capacity && <CheckBox />}
            <Order />
            {information && <Information information={information} />}
   
        </Wrapper>
            
        ) : (
                
            <Wrapper>
                <Case>
                    <div>
                        <ProductPhoto />
                        {capacity && <Capacity />}
                    </div>
                    <Box>
                        <Title>{name}</Title>
                        <Description />
                        {capacity && <CheckBox />}
                        <Order />
                    </Box>
                </Case>
                    
                {information && <Information information={information} />}
                
            </Wrapper>
        )
    );
};