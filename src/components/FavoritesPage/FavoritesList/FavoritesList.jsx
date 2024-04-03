import { useSelector } from 'react-redux';
import { selectProducts } from '../../../redux/products/productsSelectors';
import { StyledList, StyledListCard } from './FavoritesList.styled';
import { ProductsCard } from 'components/Shared/ProductsCard/ProductsCard';

export const FavoritesList = () => {
  const products = useSelector(selectProducts);

  return (
    <StyledList>
      {products.map(product => (
        <StyledListCard key={product.codeOfGood}>
          <ProductsCard product={product} />
        </StyledListCard>
      ))}
    </StyledList>
  );
};
