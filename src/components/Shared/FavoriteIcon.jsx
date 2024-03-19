import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import { BadgeComponent } from './Badge';

export const FavoriteIcon = () => {
  return (
    <BadgeComponent value={1}>
      <FavoriteBorderSharpIcon
        sx={{
          p: 0,
          color: 'background.paper',
          width: {
            mobile: '20px',
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
