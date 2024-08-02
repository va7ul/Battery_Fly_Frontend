import { RootState } from 'redux/store';

export const selectUserData = state => state.user.userData;
export const selectIsLoggedIn = state => state.user.isLoggedIn;
export const selectIsRefreshing = state => state.user.isRefreshing;
export const selectIsAuthModalOpen = state => state.user.isAuthModalOpen;
export const selectIsLoading = state => state.user.isLoading;
export const selectErrorStatus = state => state.user.errorStatus;
export const selectVerifiedEmail = state => state.user.verifiedEmail;
export const selectMessageOfSuccessfulRequest = state =>
  state.user.messageOfSuccessfulRequest;
export const selectOrders = state => state.user.orders;
export const selectDelivery = state => state.user.delivery;
export const selectFavorites = (state: RootState) => state.user.favorites;
export const selectOrdersHistory = state => state.user.ordersHistory;
export const selectOrderDetails = state => state.user.ordersDetails;
export const selectIsLoadingOrder = state => state.user.isLoadingOrder;
export const selectErrorOrder = state => state.user.errorOrder;
