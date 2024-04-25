import { EmptyCart } from './EmptyCart/EmptyCart';
import { Title, CloseBtn } from './CartModal.styled';
import { MobileDrawer } from '../MobileDrawer';
import { useSelector } from 'react-redux';
import { selectItems } from '../../../redux/basket/basketSelectors';
import { IoCloseOutline } from 'react-icons/io5';
import { FilledCart } from './FilledCart/FilledCart';

export const CartModal = ({ toggleCart, isCartOpen }) => {
  const products = useSelector(selectItems);

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
