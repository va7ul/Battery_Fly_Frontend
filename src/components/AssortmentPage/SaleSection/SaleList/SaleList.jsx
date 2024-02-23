import { SaleCard } from './SaleCard/SaleCard';
import { StyledList, StyledListCard } from './SaleList.style';

export const SaleList = () => {
  const cards = ['first', 'second', 'third'];
  return (
    <StyledList>
      {cards.map(card => (
        <StyledListCard>
          <SaleCard />
        </StyledListCard>
      ))}
    </StyledList>
  );
};
