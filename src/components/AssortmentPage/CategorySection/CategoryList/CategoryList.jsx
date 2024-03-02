import { ProductsCard } from '../../../Shared/ProductsCard/ProductsCard';
import { StyledList, StyledListCard } from './CategoryList.styled';

export const CategoryList = ({ category }) => {
  const cards = ['second', 'third', 'fourth'];
  return (
    <StyledList>
      {cards.map(card => (
        <StyledListCard key={card} category={category}>
          <div>
            <ProductsCard />
          </div>
        </StyledListCard>
      ))}
    </StyledList>
  );
};
