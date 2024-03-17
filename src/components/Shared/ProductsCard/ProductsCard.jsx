import { useDispatch, useSelector } from 'react-redux';
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
  ChooseBtn,
} from './ProductsCard.styled';
import { selectItems } from '../../../redux/basket/basketSelectors';
import { getNewPrice } from 'utils/helpers/index';

export const ProductsCard = ({ product }) => {
  const { codeOfGood, image, name, price, discount, sale, capacity } = product;
  const dispatch = useDispatch();

  let newPrice = price;
  if (sale) {
    newPrice = getNewPrice(discount, price, newPrice);
  }

  const addDefaultImg = e => {
    e.currentTarget.src = `${noImage}`;
  };

  const basketItems = useSelector(selectItems);
  const isInBasket = basketItems.find(
    basketItem => basketItem.codeOfGood === codeOfGood
  );

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
          {sale && <PriceOld>{price} грн</PriceOld>}
        </PriceContainer>
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
