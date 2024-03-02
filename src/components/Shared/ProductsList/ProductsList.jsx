import { ProductsCard } from '../ProductsCard/ProductsCard';
import { StyledList, StyledListCard } from './ProductsList.styled';

export const ProductsList = () => {
  const cards = ['first', 'second', 'third', 'fourth', 'fifth'];

  return (
    <StyledList>
      {cards.map(card => (
        <StyledListCard key={card}>
          <ProductsCard />
        </StyledListCard>
      ))}
    </StyledList>
  );
};
