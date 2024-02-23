import { CategoryCard } from './CategoryCard/CategoryCard';
import { StyledList, StyledListCard } from './CategoryList.styled';

export const CategoryList = () => {
  const cards = ['first', 'second', 'third', 'fourth'];
  return (
    <StyledList>
      {cards.map(card => (
        <StyledListCard>
          <CategoryCard />
        </StyledListCard>
      ))}
    </StyledList>
  );
};
