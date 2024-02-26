import { CategoryCard } from './CategoryCard/CategoryCard';
import { StyledList, StyledListCard } from './CategoryList.styled';

export const CategoryList = ({ category }) => {
  const cards = ['first', 'second', 'third', 'fourth'];
  return (
    <StyledList>
      {cards.map(card => (
        <StyledListCard key={card} category={category}>
          <div>
            <CategoryCard />
          </div>
        </StyledListCard>
      ))}
    </StyledList>
  );
};
