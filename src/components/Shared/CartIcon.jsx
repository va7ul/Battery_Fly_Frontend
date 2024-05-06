import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useSelector } from 'react-redux';
import { selectItems } from '../../redux/basket/basketSelectors';
import { BadgeComponent } from './Badge';

export const CartIcon = () => {
  const products = useSelector(selectItems);
  return (
    <BadgeComponent value={products.length}>
      <ShoppingCartOutlinedIcon
        sx={{
          p: 0,
          color: 'hoverColor.main',
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
