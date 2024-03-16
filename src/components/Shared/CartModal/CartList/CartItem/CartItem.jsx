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

export const CartItem = ({
  item: { codeOfGood, image, name, quantity, price, totalPrice },
}) => {
  const dispatch = useDispatch();

  const changeValue = e => {
    if (Number(e.target.value) > 0) {
      dispatch(
        changeQuantity({ codeOfGood, quantity: Number(e.target.value) })
      );
    }
  };

  return (
    <Item>
      <Image src={image} alt={name} />
      <GoodName>{name}</GoodName>
      <QuantityWrap>
        <Button
          type="button"
          onClick={() => dispatch(decreaseQuantity({ codeOfGood }))}
        >
          <FaMinus />
        </Button>
        <Input type="number" onChange={changeValue} value={quantity} />
        <Button
          type="button"
          onClick={() => dispatch(increaseQuantity({ codeOfGood }))}
        >
          <FaPlus />
        </Button>
      </QuantityWrap>
      <Price>{price}</Price>
      <DeleteBtn
        type="button"
        onClick={() => dispatch(deleteItem({ codeOfGood, totalPrice }))}
      >
        <FaXmark />
      </DeleteBtn>
    </Item>
  );
};
