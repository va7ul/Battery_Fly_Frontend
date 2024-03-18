export const handlePending = state => {
  state.isLoading = true;
};

export const handleFeedbackFulfilled = (state, { payload }) => {
  state.userFeedback.name = payload.name;
  state.userFeedback.phone = payload.phone;
  state.userFeedback.text = payload.text;
  state.isLoading = false;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};
