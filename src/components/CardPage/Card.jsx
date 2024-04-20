import { useMediaQuery } from 'react-responsive';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectOneProduct } from '../../redux/products/productsSelectors';
import { ProductPhoto } from '../Shared/ProductPhoto/ProductPhoto';
import { Description } from './Description';
import { Capacity } from './Capacity';
import { CheckBox } from './Checkbox';
import { Order } from './Order';
import { ProductInformation } from '../Shared/ProductInformation/ProductInformation';
import {
  setQuantityOrders,
  setSelectedHolder,
  setSelectedSealing,
} from '../../redux/products/oneProductSlice';
import { Wrapper, Box, Title, Case } from './Card.styled';

export const Card = () => {
  const mobileVersion = useMediaQuery({ query: '(max-width:1279px)' });
  const dispatch = useDispatch();
  const { name, image, capacity, information } = useSelector(selectOneProduct);

  useEffect(() => {
    dispatch(setQuantityOrders(1));
    dispatch(setSelectedHolder(false));
    dispatch(setSelectedSealing(false));
  }, [dispatch]);

  return (
    <Wrapper>
      {mobileVersion ? (
        <>
          <Title>{name}</Title>
          <ProductPhoto name={name} image={image} />
          <Description />
          {capacity && <Capacity />}
          {capacity && <CheckBox />}
          <Order />
        </>
      ) : (
        <Case>
          <div>
            <ProductPhoto name={name} image={image} />
            {capacity && <Capacity />}
          </div>
          <Box>
            <Title>{name}</Title>
            <Description />
            {capacity && <CheckBox />}
            <Order />
          </Box>
        </Case>
      )}
      {information && <ProductInformation information={information} />}
    </Wrapper>
  );
};
