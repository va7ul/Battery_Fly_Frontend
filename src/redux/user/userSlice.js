import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logOut, login, refreshUser, register } from './userOperations';

const initialState = {
  userData: { firstName: '', lastName: '', patronymic: '', tel: '', email: '' },
  token: '',
  errorStatus: null,
  orders: [],
  delivery: [],
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
  state.orders = payload.orders;
  state.delivery = payload.delivery;
  state.favorites = payload.favorites;
  state.isLoggedIn = true;
};

const handleLogoutPending = state => {
  state.userData = {
    firstName: '',
    lastName: '',
    patronymic: '',
    tel: '',
    email: '',
  };
  state.token = '';
  state.delivery = [];
  state.favorites = [];
  state.isLoggedIn = false;
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


const handleLoginPanging = (state, { payload }) => {
  state.errorStatus = '';
};

const handleLoginRejected = (state, { payload }) => {
  state.errorStatus = payload;
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
      .addCase(login.pending, handleLoginPanging)
      .addCase(login.rejected, handleLoginRejected)
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled),
        handleEntranceFulfilled
      );
  },
});

export const userReducer = userSlice.reducer;
