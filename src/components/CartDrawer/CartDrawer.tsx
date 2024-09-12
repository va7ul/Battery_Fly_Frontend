import { EmptyCart } from './EmptyCart/EmptyCart';
import { Title, CloseBtn } from './CartDrawer.styled';
import { MobileDrawer } from '../Shared/MobileDrawer';
import { selectItems } from '../../redux/basket/basketSelectors';
import { IoCloseOutline } from 'react-icons/io5';
import { FilledCart } from './FilledCart/FilledCart';
import { FC } from 'react';
import { useTypedSelector } from '../../redux/hooks';

type CartModalProps = {
  toggleCart: () => void;
  isCartOpen: boolean; 
}

export const CartModal: FC<CartModalProps> = ({ toggleCart, isCartOpen }) => {
  const products = useTypedSelector(selectItems);

  return (
    <>
      <MobileDrawer isOpen={isCartOpen} toggle={toggleCart} anchor="right">
        <div>
          <Title>Кошик</Title>
          <CloseBtn type="button" onClick={toggleCart}>
            <IoCloseOutline />
          </CloseBtn>
        </div>
        {products.length < 1 ? (
          <EmptyCart closeCart={toggleCart} />
        ) : (
          <FilledCart />
        )}
      </MobileDrawer>
    </>
  );
};
