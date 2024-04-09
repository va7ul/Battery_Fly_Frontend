import { CartList } from 'components/Shared/CartModal/CartList/CartList';
import { CartWrap, Title, Text, ListWrap } from './Cart.styled';
import { useSelector } from 'react-redux';
import { selectTotal } from '../../../redux/basket/basketSelectors';
export const Cart = () => {
  const total = useSelector(selectTotal);

  return (
    <CartWrap>
      <Title>Кошик</Title>
      <ListWrap>
        <CartList />
      </ListWrap>
      <Text>{total} грн</Text>
    </CartWrap>
  );
};
