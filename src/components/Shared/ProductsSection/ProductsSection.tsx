import { ProductsList } from '../ProductsList/ProductsList';
import { StyledContainer, StyledTitle } from './ProductsSection.styled';

type ProductsSectionProps = {
  category: string;
};

export const ProductsSection: React.FC<ProductsSectionProps> = ({
  category,
}) => {
  return (
    <section>
      <StyledContainer category={category}>
        <StyledTitle>{category}</StyledTitle>
        <ProductsList />
      </StyledContainer>
    </section>
  );
};
