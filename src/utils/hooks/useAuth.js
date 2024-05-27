import { useSelector } from 'react-redux';
import {
  selectErrorStatus,
  selectIsAuthModalOpen,
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectIsRegistered,
  selectUserData,
  selectVerifiedEmail,
} from '../../redux/user/userSelectors';

export const useAuth = () => {
  const userData = useSelector(selectUserData);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const verifiedEmail = useSelector(selectVerifiedEmail);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isAuthModalOpen = useSelector(selectIsAuthModalOpen);
  const errorStatus = useSelector(selectErrorStatus);
  const isLoading = useSelector(selectIsLoading);
  const isRegistered = useSelector(selectIsRegistered);

  return {
    userData,
    isLoggedIn,
    verifiedEmail,
    isRefreshing,
    isAuthModalOpen,
    errorStatus,
    isLoading,
    isRegistered,
  };
};
