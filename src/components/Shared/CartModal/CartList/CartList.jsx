import { useSelector } from 'react-redux';
import {
  selectItems,
  selectTotal,
} from '../../../../redux/basket/basketSelectors';
import { CartItem } from './CartItem/CartItem';
import { List, Text } from './CartList.styled';

export const CartList = () => {
  const products = useSelector(selectItems);
  const total = useSelector(selectTotal);

  return (
    <>
      <List>
        {products.map(item => (
          <CartItem key={item.codeOfGood} item={item} />
        ))}
      </List>
      <Text>Загальна сума: {total}</Text>
    </>
  );
};
