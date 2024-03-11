import { FaMinus, FaPlus } from 'react-icons/fa6';
import noImage from '../../../assets/images/no-image-available.webp';
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

export const ProductsCard = ({ product }) => {
  const { codeOfGood, image, name, price } = product;

  const addDefaultImg = e => {
    e.currentTarget.src = `${noImage}`;
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
          <PriceNew>{price} грн</PriceNew>
          <PriceOld>18000 грн</PriceOld>
        </PriceContainer>
        <CounterWrapper>
          <CounterBtn>
            <div>
              <FaMinus />
            </div>
          </CounterBtn>
          <CounterInput placeholder="1 шт" />
          <CounterBtn>
            <div>
              <FaPlus />
            </div>
          </CounterBtn>
        </CounterWrapper>
        <AddToBasketBtn>
          <div>Додати у кошик</div>
        </AddToBasketBtn>
        {/* <GoToBasketBtn>
          <div>Перейти у кошик</div>
        </GoToBasketBtn> */}
      </ContentWrapper>
    </>
  );
};
