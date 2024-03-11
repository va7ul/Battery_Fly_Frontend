import { useSelector } from 'react-redux';
import { selectProducts } from '../../../redux/products/productsSelectors';
import { ProductsCard } from '../ProductsCard/ProductsCard';
import { StyledList, StyledListCard } from './ProductsList.styled';

export const ProductsList = () => {
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
