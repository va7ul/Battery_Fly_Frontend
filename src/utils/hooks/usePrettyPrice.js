import { getPrettyValue } from 'utils/helpers';
import { usePromoCode } from './usePromoCode';

export const usePrettyPrice = () => {
  const { total, discountValue, together } = usePromoCode();

  const prettyTotal = getPrettyValue(total);
  const prettyDiscount = getPrettyValue(discountValue);
  const prettyTogether = getPrettyValue(together);

  return { prettyTotal, prettyDiscount, prettyTogether };
};
