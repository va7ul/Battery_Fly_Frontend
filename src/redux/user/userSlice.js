import { createSlice, isAnyOf } from '@reduxjs/toolkit';
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

const defaultUserData = {
  firstName: '',
  lastName: '',
  patronymic: '',
  tel: '',
  email: '',
};

const initialState = {
  userData: { ...defaultUserData },
  token: '',
  isAuthModalOpen: false,
  errorStatus: null,
  isRegistered: null,
  verifiedEmail: false,
  delivery: {},
  favorites: [],
  ordersHistory: [],
  ordersDetails: [],
  isLoading: false,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = (state) => {
  state.isLoading = true;
  state.errorStatus = '';
};

const handleRefreshPending = state => {
  state.isRefreshing = true;
};

const handleLogoutPending = state => {
  state.userData = { ...defaultUserData };
  state.token = '';
  state.delivery = {};
  state.favorites = [];
  state.isLoggedIn = false;
  state.verifiedEmail = false;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.errorStatus = payload;
};

const handleRefreshRejected = state => {
  state.isRefreshing = false;
  state.isLoggedIn = false;
};

const handleVerifyEmailFulfilled = (state, { payload }) => {
  state.verifiedEmail = payload;
};

const handleRegisterFulfilled = (state, { payload }) => {
  state.errorStatus = '';
  state.isLoading = false;
  state.isRegistered = payload.message;
};

const handleLoginFulfilled = (state, { payload }) => {
  state.userData = payload.user;
  state.token = payload.token;
  state.errorStatus = '';
  state.verifiedEmail = payload.verifiedEmail;
  state.delivery = payload.delivery;
  state.favorites = payload.favorites;
  state.isLoggedIn = true;
  state.isLoading = false;
};

const handleRefreshFulfilled = (state, { payload }) => {
  state.userData = payload.user;
  state.delivery = payload.delivery;
  state.favorites = payload.favorites;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleEditUserDataFulfilled = (state, { payload }) => {
  state.userData.firstName = payload.result.firstName;
  state.userData.lastName = payload.result.lastName;
  state.userData.patronymic = payload.result.patronymic;
  state.userData.tel = payload.result.tel;
};

const handleEditUserAddressFulfilled = (state, { payload }) => {
  state.delivery = payload.delivery;
};


const handleFavoriteFulfilled = (state, { payload }) => {
  state.favorites = payload.favorites;
};

const handleGetOrdersHistoryFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.ordersHistory = payload.result;
};

const handleGetOrderDetailsFulfilled = (state, { payload }) => {
  state.ordersDetails.push(payload.result);
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeErrorStatus(state, { payload }) {
      state.errorStatus = payload;
    },
    changeІsRegistered(state, { payload }) {
      state.isRegistered = payload;
    },
    setAuthModalOpen(state, { payload }) {
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
          getOrdersHistory.rejected,
          getOrderDetails.rejected
        ),
        handleRejected
      )
      .addMatcher(
        isAnyOf(addToFavorite.fulfilled, deleteFromFavorite.fulfilled),
        handleFavoriteFulfilled
      );
  },
});

export const { changeErrorStatus, setAuthModalOpen, changeІsRegistered } =
  userSlice.actions;

export const userReducer = userSlice.reducer;
