import { useTypedSelector } from '../../../redux/hooks/hooks';
import { selectProducts } from '../../../redux/products/productsSelectors';
import { ProductsCard } from '../ProductsCard/ProductsCard';
import { StyledList, StyledListCard } from './ProductsList.styled';

export const ProductsList = () => {
  const products = useTypedSelector(selectProducts);

  return (
    <StyledList>
      {products.map(product => (
        <StyledListCard key={product.codeOfGood}>
          <ProductsCard product={product} category={''} />
        </StyledListCard>
      ))}
    </StyledList>
  );
};
