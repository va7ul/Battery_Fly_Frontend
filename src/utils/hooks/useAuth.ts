import { useTypedSelector } from '../../redux/hooks';
import {
  selectErrorStatus,
  selectIsAuthModalOpen,
  selectIsLoading,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectMessageOfSuccessfulRequest,
  selectUserData,
  selectVerifiedEmail,
} from '../../redux/user/userSelectors';

export const useAuth = () => {
  const userData = useTypedSelector(selectUserData);
  const isLoggedIn = useTypedSelector(selectIsLoggedIn);
  const verifiedEmail = useTypedSelector(selectVerifiedEmail);
  const isRefreshing = useTypedSelector(selectIsRefreshing);
  const isAuthModalOpen = useTypedSelector(selectIsAuthModalOpen);
  const errorStatus = useTypedSelector(selectErrorStatus);
  const isLoading = useTypedSelector(selectIsLoading);
  const messageOfSuccessfulRequest = useTypedSelector(
    selectMessageOfSuccessfulRequest
  );

  return {
    userData,
    isLoggedIn,
    verifiedEmail,
    isRefreshing,
    isAuthModalOpen,
    errorStatus,
    isLoading,
    messageOfSuccessfulRequest,
  };
};
