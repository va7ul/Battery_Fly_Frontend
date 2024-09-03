import { createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit';
import { OrderData, UserData, Delivery, LoginFulfilled, RefreshFulfilled, EditUserData } from '../../@types/user.types';
import { Order } from '../../@types/order.types';
import {
  logOut,
  login,
  refreshUser,
  register,
  addToFavorite,
  deleteFromFavorite,
  getOrdersHistory,
  getOrderDetails,
  editUserData,
  editUserAddress,
  verifyEmail,
} from './userOperations';

type InitialState = {
  userData: UserData;
  token: string;
  isAuthModalOpen: boolean;
  errorStatus: string | null;
  messageOfSuccessfulRequest: string | null;
  verifiedEmail: boolean;
  delivery: Delivery;
  favorites: string[];
  ordersHistory: OrderData[];
  ordersDetails: Order[];
  isLoading: boolean;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  errorOrder: string | null;
  isLoadingOrder: boolean;
};


const defaultUserData: UserData = {
  firstName: '',
  lastName: '',
  patronymic: '',
  tel: '',
  email: '',
};

const initialState: InitialState = {
  userData: { ...defaultUserData },
  token: '',
  isAuthModalOpen: false,
  errorStatus: null,
  messageOfSuccessfulRequest: null,
  verifiedEmail: false,
  delivery: {
    city: '',
    warehouse: '',
  },
  favorites: [],
  ordersHistory: [],
  ordersDetails: [],
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
  errorOrder: null,
  isLoadingOrder: false,
};

const handlePending = (state: InitialState) => {
  state.isLoading = true;
  state.errorStatus = '';
};

const handleRefreshPending = (state: InitialState) => {
  state.isRefreshing = true;
};

const handleLogoutPending = (state: InitialState) => {
  state.userData = { ...defaultUserData };
  state.token = '';
  state.delivery = {
    city: '',
    warehouse: '',
  };
  state.favorites = [];
  state.isLoggedIn = false;
  state.verifiedEmail = false;
};

const handleRejected = (
  state: InitialState,
  { payload }: PayloadAction<string | undefined>
) => {
  state.isLoading = false;
  state.errorStatus = payload ?? 'Unknown error';
};

const handleRefreshRejected = (state: InitialState) => {
  state.isRefreshing = false;
  state.isLoggedIn = false;
};

const handleVerifyEmailFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<{ message: string }>
) => {
  state.errorStatus = '';
  state.isLoading = false;
  state.messageOfSuccessfulRequest = payload.message;
};

const handleRegisterFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<{ message: string }>
) => {
  state.errorStatus = '';
  state.isLoading = false;
  state.messageOfSuccessfulRequest = payload.message;
};

const handleLoginFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<LoginFulfilled>
) => {
  state.userData = payload.user;
  state.token = payload.token;
  state.errorStatus = '';
  state.verifiedEmail = payload.verifiedEmail;
  state.delivery =
    Object.keys(payload.delivery).length > 0
      ? payload.delivery
      : {
          city: '',
          warehouse: '',
        };
  state.favorites = payload.favorites;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const handleRefreshFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<RefreshFulfilled>
) => {
  state.userData = payload.user;
  state.delivery =
    Object.keys(payload.delivery).length > 0
      ? payload.delivery
      : {
          city: '',
          warehouse: '',
        };
  state.favorites = payload.favorites;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleEditUserDataFulfilled = (
  state: InitialState,
  {
    payload,
  }: PayloadAction<{
    result: EditUserData;
  }>
) => {
  state.errorStatus = '';
  state.isLoading = false;
  state.userData.firstName = payload.result.firstName;
  state.userData.lastName = payload.result.lastName;
  state.userData.patronymic = payload.result.patronymic;
  state.userData.tel = payload.result.tel;
};

const handleEditUserAddressFulfilled = (
  state: InitialState,
  {
    payload,
  }: PayloadAction<{
    delivery: Delivery;
  }>
) => {
  state.errorStatus = '';
  state.isLoading = false;
  state.delivery = payload.delivery;
};

const handleFavoriteFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<{ favorites: string[] }>
) => {
  state.favorites = payload.favorites;
};

const handleGetOrdersHistoryFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<{ result: OrderData[] }>
) => {
  state.isLoading = false;
  state.ordersHistory = payload.result;
};

const handleGetOrderDetailsPending = (state: InitialState) => {
  state.isLoadingOrder = true;
  state.errorOrder = null;
};

const handleGetOrderDetailsRejected = (
  state: InitialState,
  { payload }: PayloadAction<string | undefined>
) => {
  state.isLoadingOrder = false;
  state.errorOrder = payload ?? 'Unknown error';
};

const handleGetOrderDetailsFulfilled = (
  state: InitialState,
  { payload }: PayloadAction<{ result: Order }>
) => {
  state.isLoadingOrder = false;
  state.ordersDetails.push(payload.result);
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeErrorStatus(state, { payload }: PayloadAction<string>) {
      state.errorStatus = payload;
    },
    changeMessageOfSuccessfulRequest(
      state,
      { payload }: PayloadAction<string>
    ) {
      state.messageOfSuccessfulRequest = payload;
    },
    setAuthModalOpen(state, { payload }: PayloadAction<boolean>) {
      state.isAuthModalOpen = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(logOut.pending, handleLogoutPending)
      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.rejected, handleRefreshRejected)
      .addCase(register.fulfilled, handleRegisterFulfilled)
      .addCase(login.fulfilled, handleLoginFulfilled)
      .addCase(verifyEmail.fulfilled, handleVerifyEmailFulfilled)
      .addCase(editUserData.fulfilled, handleEditUserDataFulfilled)
      .addCase(editUserAddress.fulfilled, handleEditUserAddressFulfilled)
      .addCase(getOrdersHistory.fulfilled, handleGetOrdersHistoryFulfilled)
      .addCase(getOrderDetails.pending, handleGetOrderDetailsPending)
      .addCase(getOrderDetails.rejected, handleGetOrderDetailsRejected)
      .addCase(getOrderDetails.fulfilled, handleGetOrderDetailsFulfilled)
      .addMatcher(
        isAnyOf(
          register.pending,
          verifyEmail.pending,
          login.pending,
          editUserData.pending,
          editUserAddress.pending,
          getOrdersHistory.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          register.rejected,
          verifyEmail.rejected,
          login.rejected,
          editUserData.rejected,
          editUserAddress.rejected,
          addToFavorite.rejected,
          deleteFromFavorite.rejected,
          getOrdersHistory.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(addToFavorite.fulfilled, deleteFromFavorite.fulfilled),
        handleFavoriteFulfilled
      );
  },
});

export const {
  changeErrorStatus,
  setAuthModalOpen,
  changeMessageOfSuccessfulRequest,
} = userSlice.actions;

export const userReducer = userSlice.reducer;
