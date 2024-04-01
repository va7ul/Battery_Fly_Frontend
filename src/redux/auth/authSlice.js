import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { logOut, login, refreshUser, register } from './authOperations';

const initialState = {
  userData: { firstName: '', lastName: '', email: '' },
  token: '',
  isLoggedIn: false,
  isRefreshing: false,
};

const handleEntranceFulfilled = (state, { payload }) => {
  state.userData = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};

const handleLogoutPending = state => {
  state.userData = { firstName: '', lastName: '', email: '' };
  state.token = '';
  state.isLoggedIn = false;
};

const handleRefreshPending = state => {
  state.isRefreshing = true;
};

const handleRefreshFulfilled = (state, { payload }) => {
  state.userData = payload.user;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};

const handleRefreshRejected = (state) => {
  state.isRefreshing = false;
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(logOut.pending, handleLogoutPending)
      .addCase(refreshUser.pending, handleRefreshPending)
      .addCase(refreshUser.fulfilled, handleRefreshFulfilled)
      .addCase(refreshUser.rejected, handleRefreshRejected)
      .addMatcher(
        isAnyOf(register.fulfilled, login.fulfilled),
        handleEntranceFulfilled
      );
  }
});

export const authReducer = authSlice.reducer;
