import { CartList } from 'components/Shared/CartModal/CartList/CartList';
import { CartWrap, Title, ListWrap } from './Cart.styled';

export const Cart = () => {
  return (
    <CartWrap>
      <Title>Кошик</Title>
      <ListWrap>
        <CartList />
      </ListWrap>
    </CartWrap>
  );
};
