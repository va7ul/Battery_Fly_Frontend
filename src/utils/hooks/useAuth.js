import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUserData,
} from '../../redux/user/userSelectors';

export const useAuth = () => {
  const userData = useSelector(selectUserData);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);

  return { userData, isLoggedIn, isRefreshing };
};
