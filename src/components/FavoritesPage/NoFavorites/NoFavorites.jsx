import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Wrapper, Title, LinkToAssortment } from './NoFavorites.styled';

export const NoFavorites = () => {
  return (
    <Wrapper>
      <Title>Список обраних порожній</Title>
      <p>
        Додайте товари, які сподобалися до списку обраних, <br /> щоб
        переглянути їх пізніше.
      </p>
      <LinkToAssortment to="/assortment">До асортименту</LinkToAssortment>
      <FavoriteBorderOutlinedIcon />
    </Wrapper>
  );
};
