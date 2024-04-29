import { useSelector } from 'react-redux';
import { selectTotal } from '../../redux/basket/basketSelectors';
import { usePromoCode } from 'utils/hooks';
import { getPrettyValue } from 'utils/helpers';

export const usePrettyPrice = () => {
  const total = useSelector(selectTotal);
  const discountValue = usePromoCode();
  const together = total - discountValue;

  const prettyTotal = getPrettyValue(total);
  const prettyDiscount = getPrettyValue(discountValue);
  const prettyTogether = getPrettyValue(together);

  return { prettyTotal, prettyDiscount, prettyTogether };
};
