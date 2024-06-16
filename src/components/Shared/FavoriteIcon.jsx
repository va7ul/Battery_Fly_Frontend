import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import { BadgeComponent } from './Badge';
import { useSelector } from 'react-redux';
import { selectFavorites } from '../../redux/user/userSelectors';

export const FavoriteIcon = ({ handleOpenSignUpSignInModal }) => {
  const favorites = useSelector(selectFavorites);

  return (
    <BadgeComponent value={favorites?.length}>
      <FavoriteBorderSharpIcon
        onClick={handleOpenSignUpSignInModal}
        sx={{
          p: 0,
          color: 'hoverColor.main',
          width: {
            mobile: '24px',
            desktop: '35px',
          },
          cursor: 'pointer',
        }}
      />
    </BadgeComponent>
  );
};
