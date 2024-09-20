import { CartList } from 'components/CartDrawer/CartList/CartList';
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
