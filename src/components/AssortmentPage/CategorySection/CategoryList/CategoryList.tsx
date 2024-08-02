import { useTypedSelector } from '../../../../redux/hooks';
import { selectProducts } from '../../../../redux/products/productsSelectors';
import { getCategoryName, getProductList } from 'utils/helpers/index';
import { ProductsCard } from '../../../Shared/ProductsCard/ProductsCard';
import { StyledList, StyledListCard } from './CategoryList.styled';

type PropsCategoryList = {
  category: string;
};

export const CategoryList: React.FC<PropsCategoryList> = ({ category }) => {
  const popularProducts = useTypedSelector(selectProducts);
  const categoryName = getCategoryName(category);
  const productList = getProductList(popularProducts, categoryName);

  const limitProductList =
    categoryName === 'sale' ? productList.slice(-4) : productList.slice(0, 4);

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
