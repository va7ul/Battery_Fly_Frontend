import { ProductsList } from '../ProductsList/ProductsList';
import { StyledContainer, StyledTitle } from './ProductsSection.styled';

export const ProductsSection = ({ category }) => {
  return (
    <section>
      <StyledContainer>
        <StyledTitle>{category}</StyledTitle>
        <ProductsList />
      </StyledContainer>
    </section>
  );
};
