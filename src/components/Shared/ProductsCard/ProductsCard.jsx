import { useDispatch, useSelector } from 'react-redux';
// import {  useState } from 'react';
// import { FaMinus, FaPlus } from 'react-icons/fa6';
import noImage from '../../../assets/images/no-image-available.webp';
import { addItem } from '../../../redux/basket/basketSlice';
import {
  IconHeart,
  IconFullHeart,
  StyledImage,
  ContentWrapper,
  CardTitle,
  PriceContainer,
  PriceNew,
  PriceOld,
  // CounterWrapper,
  // CounterBtn,
  // CounterInput,
  ChooseBtn,
  // GoToBasketBtn,
} from './ProductsCard.styled';
import { selectItems } from '../../../redux/basket/basketSelectors';
import { getNewPrice } from 'utils/helpers/index';

export const ProductsCard = ({ product }) => {
  const { codeOfGood, image, name, price, salePrice, capacity } = product;
  const dispatch = useDispatch();
  // const [quantityOrdered, setQuantityOrdered] = useState(1);

  let newPrice = price;
  newPrice = getNewPrice(salePrice, price, newPrice);

  const addDefaultImg = e => {
    e.currentTarget.src = `${noImage}`;
  };

  const basketItems = useSelector(selectItems);
  const isInBasket = basketItems.find(
    basketItem => basketItem.codeOfGood === codeOfGood
  );

  // const plusOne = () => {
  //   setQuantityOrdered(state => state + 1);
  // };

  // const minusOne = () => {
  //   if (quantityOrdered > 1) {
  //     setQuantityOrdered(state => state - 1);
  //   }
  // };

  // const setValue = e => {
  //   if (Number(e.target.value) > 0) {
  //     setQuantityOrdered(Number(e.target.value));
  //   }
  // };

  const addToBasket = e => {
    dispatch(
      addItem({
        codeOfGood,
        image,
        name,
        capacityKey: '',
        quantityOrdered: 1,
        price,
        totalPrice: price,
        // sealing,
        // holders,
        // capacityKey,
      })
    );
  };

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
          <PriceNew>{newPrice} грн</PriceNew>
          <PriceOld>{price} грн</PriceOld>
        </PriceContainer>
        {/* <CounterWrapper>
          <CounterBtn onClick={minusOne}>
            <div>
              <FaMinus />
            </div>
          </CounterBtn>
          <CounterInput
            onChange={setValue}
            type="integer"
            min="1"
            value={quantityOrdered}
          />
          <CounterBtn onClick={plusOne}>
            <div>
              <FaPlus />
            </div>
          </CounterBtn>
        </CounterWrapper> */}
        {!capacity ? (
          !isInBasket ? (
            <ChooseBtn onClick={addToBasket}>
              <div>Додати у кошик</div>
            </ChooseBtn>
          ) : (
            <ChooseBtn>
              <div>Перейти у кошик</div>
            </ChooseBtn>
          )
        ) : (
          <ChooseBtn>
            <div>Оберіть параметри</div>
          </ChooseBtn>
        )}
      </ContentWrapper>
    </>
  );
};
