import { useSelector } from 'react-redux';
import { ProductsCard } from '../../../Shared/ProductsCard/ProductsCard';
import { StyledList, StyledListCard } from './CategoryList.styled';
import { selectPopularProducts } from '../../../../redux/products/productsSelectors';
import { getCategoryName, getProductList } from 'utils/helpers/index';

export const CategoryList = ({ category }) => {
  const popularProducts = useSelector(selectPopularProducts);
  const categoryName = getCategoryName(category);
  const productList = getProductList(popularProducts, categoryName);
  const limitProductList = productList.slice(0, 4);

  return (
    <StyledList category={category}>
      {limitProductList.map(product => (
        <StyledListCard key={product.codeOfGood} category={category}>
          <ProductsCard category={category} product={product} />
        </StyledListCard>
      ))}
    </StyledList>
  );
};
