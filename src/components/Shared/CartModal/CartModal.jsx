import { EmptyCart } from './EmptyCart/EmptyCart';
import { Title } from './CartModal.styled';
import { MobileDrawer } from '../MobileDrawer';

export const CartModal = ({ isOpen, closeCartDrawer }) => {
  return (
    <>
      <MobileDrawer
        isOpen={isOpen}
        closeDrawer={closeCartDrawer}
        anchor="right"
      >
        <Title>Кошик</Title>
        <EmptyCart />
      </MobileDrawer>
    </>
  );
};
