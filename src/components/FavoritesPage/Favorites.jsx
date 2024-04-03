import { SideBarNav } from 'components/Shared/SideBarNav/SideBarNav';
import { Wrapper, Title } from './Favorites.styled';
import { FavoritesList } from './FavoritesList/FavoritesList';

export const Favorites = () => {
  return (
    <Wrapper>
      <SideBarNav />
      <div>
        <Title>Обране</Title>
        <FavoritesList />
      </div>
    </Wrapper>
  );
};
