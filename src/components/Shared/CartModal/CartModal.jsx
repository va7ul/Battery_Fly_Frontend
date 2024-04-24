import { EmptyCart } from './EmptyCart/EmptyCart';
import { Title, CloseBtn } from './CartModal.styled';
import { MobileDrawer } from '../MobileDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { selectItems } from '../../../redux/basket/basketSelectors';
import { IoCloseOutline } from 'react-icons/io5';
import { selectCart } from '../../../redux/menu/menuSelectors';
import { setCartOpen } from '../../../redux/menu/menuSlice';
import { FilledCart } from './FilledCart/FilledCart';

export const CartModal = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectItems);
  const isCartOpen = useSelector(selectCart);

  const toggleCart = () => {
    dispatch(setCartOpen(!isCartOpen));
  };

  return (
    <>
      <MobileDrawer
        isOpen={isCartOpen}
        closeDrawer={toggleCart}
        openDrawer={toggleCart}
        anchor="right"
      >
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
