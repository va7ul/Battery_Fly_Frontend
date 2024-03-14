import { useSelector } from 'react-redux';
import {
  selectItems,
  selectTotalPrice,
} from '../../../../redux/basket/basketSelectors';
import { CartItem } from './CartItem/CartItem';
import { List } from './CartList.styled';

export const CartList = () => {
  const products = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <>
      <List>
        {products.map(item => (
          <CartItem key={item.codeOfGood} item={item} />
        ))}
      </List>
      <p>Загальна сума: {totalPrice}</p>
    </>
  );
};
