import { Cart } from './Cart/Cart';
import { Wrapper } from './Checkout.styled';
import { Delivery } from './Delivery/Delivery';

export const Checkout = () => {
  return (
    <Wrapper>
      <Cart />
      <Delivery />
    </Wrapper>
  );
};
