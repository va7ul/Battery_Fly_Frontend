import { RootState } from 'redux/store';

export const selectUserData = (state: RootState) => state.user.userData;
export const selectIsLoggedIn = (state: RootState) => state.user.isLoggedIn;
export const selectIsRefreshing = (state: RootState) => state.user.isRefreshing;
export const selectIsAuthModalOpen = (state: RootState) => state.user.isAuthModalOpen;
export const selectIsLoading = (state: RootState) => state.user.isLoading;
export const selectErrorStatus = (state: RootState) => state.user.errorStatus;
export const selectVerifiedEmail = (state: RootState) => state.user.verifiedEmail;
export const selectMessageOfSuccessfulRequest = (state: RootState) =>
  state.user.messageOfSuccessfulRequest;
// export const selectOrders = (state: RootState) => state.user.orders;
export const selectDelivery = (state: RootState) => state.user.delivery;
export const selectFavorites = (state: RootState) => state.user.favorites;
export const selectOrdersHistory = (state: RootState) =>
  state.user.ordersHistory;
export const selectOrderDetails = (state: RootState) =>
  state.user.ordersDetails;
export const selectIsLoadingOrder = (state: RootState) =>
  state.user.isLoadingOrder;
export const selectErrorOrder = (state: RootState) => state.user.errorOrder;
