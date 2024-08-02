import { Product, ProductZbirky } from '../../../@types/products.types';
import { ProductsCard } from 'components/Shared/ProductsCard/ProductsCard';
import { StyledList, StyledListCard } from './FavoritesList.styled';

type PropsFavoritesList = {
  favorites: (Product | ProductZbirky)[];
};

export const FavoritesList: React.FC<PropsFavoritesList> = ({ favorites }) => {
  return (
    <StyledList>
      {favorites?.map(product => (
        <StyledListCard key={product.codeOfGood}>
          <ProductsCard product={product} category={''} />
        </StyledListCard>
      ))}
    </StyledList>
  );
};
