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
} from './CategoryCard.styled';

export const CategoryCard = () => {
  return (
    <>
      <IconHeart />
      <IconFullHeart />
      <StyledImage src="" alt="text" />
      <ContentWrapper>
        <CardTitle>
          Lorem ipsum dolor sit amet consectetur ipsum dolor sit amet
        </CardTitle>
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
          <CounterInput placeholder="100 шт" />
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
