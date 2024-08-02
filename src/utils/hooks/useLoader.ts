import { useTypedSelector } from '../../redux/hooks';
import {
  selectAllProductsIsLoading,
  selectAllProductsError,
} from '../../redux/products/productsSelectors';

export const useLoader = () => {
  const isLoading = useTypedSelector(selectAllProductsIsLoading);
  const error = useTypedSelector(selectAllProductsError);

  return { isLoading, error };
};
