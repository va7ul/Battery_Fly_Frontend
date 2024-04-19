import { StyledList, StyledListCard } from './FavoritesList.styled';
import { ProductsCard } from 'components/Shared/ProductsCard/ProductsCard';

export const FavoritesList = ({ favorites }) => {
  return (
    <StyledList>
      {favorites?.map(product => (
        <StyledListCard key={product.codeOfGood}>
          <ProductsCard product={product} />
        </StyledListCard>
      ))}
    </StyledList>
  );
};
