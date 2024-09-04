import { selectItems } from '../../../redux/basket/basketSelectors';
import { CartItem } from './CartItem/CartItem';
import { List } from './CartList.styled';
import { FC } from 'react';
import { useTypedSelector } from '../../../redux/hooks';

type Product = {
  codeOfGood: string;
  image: string[];
  name: string;
  quantity: number;
  quantityOrdered: number;
  totalPrice: number;
  capacityKey?: string;
  selectedSealing?: boolean;
  selectedHolder?: boolean;
}

export const CartList: FC = () => {
 const products = useTypedSelector(selectItems) as Product[];
  
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
