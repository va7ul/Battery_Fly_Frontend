import { useSelector } from 'react-redux';
import { selectFavoriteProducts } from '../../../redux/products/productsSelectors';
import { StyledList, StyledListCard } from './FavoritesList.styled';
import { ProductsCard } from 'components/Shared/ProductsCard/ProductsCard';

export const FavoritesList = () => {
  const favorites = useSelector(selectFavoriteProducts);

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
