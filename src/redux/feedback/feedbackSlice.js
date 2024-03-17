import { createSlice } from "@reduxjs/toolkit";
import { addFeedback } from "./feedbackOperations";
import { handleFeedbackFulfilled, handlePending, handleRejected } from "./feedbackReducers";


const feedbackInitialState = {
  userFeedback: { name: null, text: null, phone: null },
  isLoading: false,
  error: null,
};

const feedbackSlice = createSlice({
  name: 'feedback',
  initialState: feedbackInitialState,
  extraReducers: builder => {
    builder
      .addCase(addFeedback.pending, handlePending)
      .addCase(addFeedback.fulfilled, handleFeedbackFulfilled)
      .addCase(addFeedback.rejected, handleRejected);
  },
});

export const feedbackReducer = feedbackSlice.reducer;
