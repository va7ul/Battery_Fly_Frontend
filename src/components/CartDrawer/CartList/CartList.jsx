import { useSelector } from 'react-redux';
import { selectItems } from '../../../redux/basket/basketSelectors';
import { CartItem } from './CartItem/CartItem';
import { List } from './CartList.styled';

export const CartList = () => {
  const products = useSelector(selectItems);

  return (
    <>
      <List>
        {products.map((item, index) => (
          <CartItem key={item.codeOfGood + index} item={item} />
        ))}
      </List>
    </>
  );
};
