import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  logOut,
  login,
  refreshUser,
  register,
  addToFavorite,
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
  errorStatus: null,
  verifiedEmail: false,
  orders: [],
  delivery: {},
  favorites: [],
  isLoading: false,
  error: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handleEntranceFulfilled = (state, { payload }) => {
  state.userData = payload.user;
  state.token = payload.token;
  state.errorStatus = '';
  state.verifiedEmail = payload.verifiedEmail;
  state.orders = payload.orders;
  state.delivery = payload.delivery;
  state.favorites = payload.favorites;
  state.isLoggedIn = true;
};

const handleLogoutPending = state => {
  state.userData = { ...defaultUserData };
  state.token = '';
  state.orders = [];
  state.delivery = {};
  state.favorites = [];
  state.isLoggedIn = false;
  state.verifiedEmail = false;
};

const handleRefreshPending = state => {
  state.isRefreshing = true;
};

const handleRefreshFulfilled = (state, { payload }) => {
  state.userData = payload.user;
  state.orders = payload.orders;
  state.delivery = payload.delivery;
  state.favorites = payload.favorites;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRefreshRejected = state => {
  state.isRefreshing = false;
};

const handleEntrancePending = (state, { payload }) => {
  state.errorStatus = '';
};

const handleEntranceRejected = (state, { payload }) => {
  state.errorStatus = payload;
};

const handleAddToFavoriteFulfilled = (state, { payload }) => {
  state.favorites = payload.favorites;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.pending, handleLogoutPending)
      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.rejected, handleRefreshRejected)
      .addCase(addToFavorite.fulfilled, handleAddToFavoriteFulfilled)
      .addMatcher(
        isAnyOf(register.pending, login.pending),
        handleEntrancePending
      )
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled),
        handleEntranceFulfilled
      )
      .addMatcher(
        isAnyOf(register.rejected, login.rejected),
        handleEntranceRejected
      );
  },
});

export const userReducer = userSlice.reducer;
