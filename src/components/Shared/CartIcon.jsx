import { Badge } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

export const CartIcon = () => {
  return (
    <Badge
      badgeContent={1}
      color="secondary"
      sx={{
        '& .MuiBadge-badge': {
          fontSize: 7,
          fontWeight: '400',
          color: 'background.default',
          height: {
            mobile: 12,
            desktop: 15,
          },
          minWidth: {
            mobile: 12,
            desktop: 15,
          },
          top: 5,
          right: 2,
          p: 0,
        },
      }}
    >
      <ShoppingCartOutlinedIcon
        sx={{
          p: 0,
          color: 'background.paper',
          width: '20px',
          ' &:hover': {
            color: 'secondary.main',
          },
        }}
      />
    </Badge>
  );
};
