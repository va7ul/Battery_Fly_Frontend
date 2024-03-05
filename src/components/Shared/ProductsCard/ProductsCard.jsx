import { FaMinus, FaPlus } from 'react-icons/fa6';
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

export const ProductsCard = () => {
  return (
    <>
      <ContentWrapper>
        <IconHeart />
        <IconFullHeart />
        <a href="assortment/1">
          <StyledImage src="" alt="text" />
          <CardTitle>
            Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet
          </CardTitle>
        </a>
        <PriceContainer>
          <PriceNew>15000 грн</PriceNew>
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
