export const handlePending = state => {
    state.isLoading = true;
};

export const handleFeedbackFulfilled = (state, { payload }) => {
  state.userFeedback = payload.user;
  state.isLoading = false;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
