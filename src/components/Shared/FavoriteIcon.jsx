import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import { BadgeComponent } from './Badge';
import { useSelector } from 'react-redux';
import { selectFavoriteProducts } from '../../redux/products/productsSelectors';

export const FavoriteIcon = () => {
  const favorites = useSelector(selectFavoriteProducts);

  return (
    <BadgeComponent value={favorites.length}>
      <FavoriteBorderSharpIcon
        sx={{
          p: 0,
          color: 'background.paper',
          width: {
            mobile: '24px',
            desktop: '35px',
          },
          ' &:hover': {
            color: 'secondary.main',
          },
        }}
      />
    </BadgeComponent>
  );
};
