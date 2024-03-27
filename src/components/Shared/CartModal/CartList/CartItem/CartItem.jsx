import { useDispatch } from 'react-redux';
import {
  Item,
  Image,
  GoodName,
  QuantityWrap,
  Button,
  Input,
  Price,
  DeleteBtn,
} from './CartItem.styled';
import { FaMinus, FaPlus, FaXmark } from 'react-icons/fa6';
// import { FaTrash } from 'react-icons/fa6';
import {
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  changeQuantity,
} from '../../../../../redux/basket/basketSlice';

export const CartItem = ({ item }) => {
  const {
    codeOfGood,
    image,
    name,
    quantityOrdered,
    totalPrice,
    capacityKey,
    selectedSealing,
    selectedHolders,
  } = item;

  const dispatch = useDispatch();

  const changeValue = e => {
    // const newTotalPrice = price * quantityOrdered;
    // console.log(newTotalPrice);
    if (Number(e.target.value) > 0) {
      dispatch(
        changeQuantity({
          codeOfGood,
          capacityKey,
          selectedSealing,
          selectedHolders,
          totalPrice,
          quantityOrdered: Number(e.target.value),
        })
      );
    }
  };

  const deleteFromCart = () => {
    dispatch(
      deleteItem({
        codeOfGood,
        totalPrice,
        // capacityKey,
        // selectedSealing,
        // selectedHolders,
      })
    );
  };

  return (
    <Item>
      <Image src={image[0]} alt={name} />
      <GoodName>{name}</GoodName>
      <QuantityWrap>
        <Button type="button" onClick={() => dispatch(decreaseQuantity(item))}>
          <FaMinus />
        </Button>
        <Input type="number" onChange={changeValue} value={quantityOrdered} />
        <Button type="button" onClick={() => dispatch(increaseQuantity(item))}>
          <FaPlus />
        </Button>
      </QuantityWrap>
      <Price>{totalPrice}</Price>
      <DeleteBtn type="button" onClick={deleteFromCart}>
        <FaXmark />
      </DeleteBtn>
    </Item>
  );
};
