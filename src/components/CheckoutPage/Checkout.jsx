import { Cart } from './Cart/Cart';
import { Wrapper } from './Checkout.styled';
import { Delivery } from './Delivery/Delivery';
import { PersonalData } from './PersonalData/PersonalData';

export const Checkout = () => {
  return (
    <Wrapper>
      <PersonalData />
      <Cart />
      <Delivery />
    </Wrapper>
  );
};
