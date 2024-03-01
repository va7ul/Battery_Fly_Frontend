import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   userData: { ...defaultUserData },
  //   token: '',
  //   error: null,
  //   isLoading: false,
  //   isLoggedIn: false,
  //   isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => builder,
  //   // signup
  //   .addCase(register.pending, handlePending)
  //   .addCase(register.fulfilled, handleRegisterLoginFulfield)
  //   .addCase(register.rejected, handleRejected)
  //   // signin
  //   .addCase(login.pending, handlePending)
  //   .addCase(login.fulfilled, handleRegisterLoginFulfield)
  //   .addCase(login.rejected, handleRejected)
  //   // logout
  //   .addCase(logOut.pending, handlePending)
  //   .addCase(logOut.fulfilled, handleLogoutFulfield)
  //   .addCase(logOut.rejected, handleRejected)
  //   // forgotPassword
  //   .addCase(forgotPassword.pending, handlePending)
  //   .addCase(forgotPassword.fulfilled, handleForgotPasswordFulfield)
  //   .addCase(forgotPassword.rejected, handleRejected)
  //   // verifyEmail
  //   .addCase(verifyEmail.pending, handlePending)
  //   .addCase(verifyEmail.fulfilled, handleVerifyEmailFulfield)
  //   .addCase(verifyEmail.rejected, handleRejected)
  //   // refreshUser
  //   .addCase(refreshUser.pending, handlePending)
  //   .addCase(refreshUser.fulfilled, handleRefreshUserFulfield)
  //   .addCase(refreshUser.rejected, handleRejected)
});

export const authReducer = authSlice.reducer;
