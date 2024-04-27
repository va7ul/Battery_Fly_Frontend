import { useSelector } from 'react-redux';
import {
  selectAllProductsIsLoading,
  selectAllProductsError,
} from '../../redux/products/productsSelectors';

export const useLoader = () => {
  const isLoading = useSelector(selectAllProductsIsLoading);
  const error = useSelector(selectAllProductsError);

  return { isLoading, error };
};
