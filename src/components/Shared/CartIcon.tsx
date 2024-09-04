import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { selectItems } from '../../redux/basket/basketSelectors';
import { BadgeComponent } from './Badge';
import { useTypedSelector } from '../../redux/hooks';

export const CartIcon = () => {
  const products = useTypedSelector(selectItems);
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
        }}
      />
    </BadgeComponent>
  );
};
