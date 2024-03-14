import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import noImage from '../../../assets/images/no-image-available.webp';
import {
  addItem,
  // deleteItem,
  // increaseQuantity,
  // decreaseQuantity,
  // changeQuantity,
} from '../../../redux/basket/basketSlice';
import {
  IconHeart,
  IconFullHeart,
  StyledImage,
  ContentWrapper,
  CardTitle,
  PriceContainer,
  PriceNew,
  PriceOld,
  CounterWrapper,
  CounterBtn,
  CounterInput,
  AddToBasketBtn,
  // GoToBasketBtn,
} from './ProductsCard.styled';
// import { selectItems } from '../../../redux/basket/basketSelectors';

export const ProductsCard = ({ product }) => {
  const { codeOfGood, image, name, price } = product;
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const addDefaultImg = e => {
    e.currentTarget.src = `${noImage}`;
  };

  const plusOne = () => {
    setQuantity(state => state + 1);
  };

  const minusOne = () => {
    if (quantity > 1) {
      setQuantity(state => state - 1);
    }
  };

  const setValue = e => {
    if (Number(e.target.value) > 0) {
      setQuantity(Number(e.target.value));
    }
  };

  const addToBasket = e => {
    dispatch(addItem({ codeOfGood, image, name, quantity, price }));
  };

  // const basketItems = useSelector(selectItems);
  // const findItem = () => {
  //   console.log(
  //     basketItems.find(basketItem => basketItem.codeOfGood === codeOfGood)
  //   );
  // };

  return (
    <>
      <ContentWrapper>
        <IconHeart />
        <IconFullHeart />
        <a href={`assortment/${codeOfGood}`}>
          <StyledImage
            loading="lazy"
            src={image[0]}
            alt={name}
            onError={addDefaultImg}
          />
          <CardTitle>{name}</CardTitle>
        </a>
        <PriceContainer>
          <PriceNew>{price * quantity} грн</PriceNew>
          <PriceOld>18000 грн</PriceOld>
        </PriceContainer>
        <CounterWrapper>
          <CounterBtn onClick={minusOne}>
            <div>
              <FaMinus />
            </div>
          </CounterBtn>
          <CounterInput
            onChange={setValue}
            type="integer"
            min="1"
            value={quantity}
          />
          <CounterBtn onClick={plusOne}>
            <div>
              <FaPlus />
            </div>
          </CounterBtn>
        </CounterWrapper>
        <AddToBasketBtn onClick={addToBasket}>
          <div>Додати у кошик</div>
        </AddToBasketBtn>
        {/* <GoToBasketBtn>
          <div>Перейти у кошик</div>
        </GoToBasketBtn> */}
      </ContentWrapper>
    </>
  );
};
