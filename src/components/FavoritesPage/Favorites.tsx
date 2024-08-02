import { useMediaQuery } from 'react-responsive';
import { useTypedSelector } from '../../redux/hooks';
import { selectProducts } from '../../redux/products/productsSelectors';
import { SideBarNav } from 'components/Shared/SideBarNav/SideBarNav';
import { FavoritesList } from './FavoritesList/FavoritesList';
import { Wrapper, Title } from './Favorites.styled';
import { NoFavorites } from './NoFavorites/NoFavorites';

export const Favorites = () => {
  const desktopVersion = useMediaQuery({ query: '(min-width:1280px)' });
  const favorites = useTypedSelector(selectProducts);

  return (
    <Wrapper>
      {desktopVersion && <SideBarNav />}
      {favorites?.length ? (
        <div>
          <Title>Обране</Title>
          <FavoritesList favorites={favorites} />
        </div>
      ) : (
        <NoFavorites />
      )}
    </Wrapper>
  );
};
