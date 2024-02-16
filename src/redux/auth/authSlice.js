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
  //   .addCase(registerUser.pending, handlePending)
  //   .addCase(registerUser.fulfilled, handleRegisterLoginFulfield)
  //   .addCase(registerUser.rejected, handleRejected)
  //   // signin
  //   .addCase(loginUser.pending, handlePending)
  //   .addCase(loginUser.fulfilled, handleRegisterLoginFulfield)
  //   .addCase(loginUser.rejected, handleRejected)
  //   // logout
  //   .addCase(logOut.pending, handlePending)
  //   .addCase(logOut.fulfilled, handleLogoutFulfield)
  //   .addCase(logOut.rejected, handleRejected)
  //   // forgotPassword
  //   .addCase(forgotPassword.pending, handlePending)
  //   .addCase(forgotPassword.fulfilled, handleForgotPasswordFulfield)
  //   .addCase(forgotPassword.rejected, handleRejected)
  //   // refreshUser
  //   .addCase(refreshUser.pending, handlePending)
  //   .addCase(refreshUser.fulfilled, handleRefreshUserFulfield)
  //   .addCase(refreshUser.rejected, handleRejected)
  //   // updateUser
  //   .addCase(updateUser.pending, handlePending)
  //   .addCase(updateUser.fulfilled, handleUpdateUserFulfield)
  //   .addCase(updateUser.rejected, handleRejected)
  //   // updateGoal
  //   .addCase(updateGoal.pending, handlePending)
  //   .addCase(updateGoal.fulfilled, handleUpdateGoalFulfield)
  //   .addCase(updateGoal.rejected, handleRejected)
  //   // updatewWeight
  //   .addCase(updateWeight.pending, handlePending)
  //   .addCase(updateWeight.fulfilled, handleUpdateWeightFulfield)
  //   .addCase(updateWeight.rejected, handleRejected),
});

export const authReducer = authSlice.reducer;
