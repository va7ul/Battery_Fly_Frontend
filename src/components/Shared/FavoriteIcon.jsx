import { Badge } from '@mui/material';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';

export const FavoriteIcon = () => {
  return (
    <Badge
      badgeContent={1}
      color="secondary"
      sx={{
        '& .MuiBadge-badge': {
          fontSize: {
            mobile: 7,
            desktop: 10,
          },
          fontWeight: '400',
          color: 'background.default',
          height: {
            mobile: 12,
            desktop: 18,
          },
          minWidth: {
            mobile: 12,
            desktop: 18,
          },
          top: 5,
          right: {
            mobile: 0,
            desktop: 2,
          },
          p: 0,
        },
      }}
    >
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
    </Badge>
  );
};
