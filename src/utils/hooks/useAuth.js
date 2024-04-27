import { useSelector } from 'react-redux';
import {
  selectErrorStatus,
  selectIsAuthModalOpen,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectUserData,
} from '../../redux/user/userSelectors';

export const useAuth = () => {
  const userData = useSelector(selectUserData);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isAuthModalOpen = useSelector(selectIsAuthModalOpen);
  const errorStatus = useSelector(selectErrorStatus);

  return { userData, isLoggedIn, isRefreshing, isAuthModalOpen, errorStatus };
};
