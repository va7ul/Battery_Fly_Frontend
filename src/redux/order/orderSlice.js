import { createSlice} from '@reduxjs/toolkit';
import { addOrder } from './orderOperations';

const defaultUserData = {
  firstName: '',
  lastName: '',
  tel: '',
  email: '',
  text: '',
};

const initialState = {
  userData: { ...defaultUserData },
  isLoading: false,
  error: null,
};

export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilledAddOrder = (state, { payload }) => {
  state.userData = payload.user;
  state.isLoading = false;
  state.error = '';
};

export const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};


const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    changeUserTel(state, { payload }) {
      state.userData.tel = payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addOrder.pending, handlePending)
      .addCase(addOrder.fulfilled, handleFulfilledAddOrder)
      .addCase(addOrder.rejected, handleRejected);
  },
});

export const { changeUserTel } = orderSlice.actions;

export const orderReducer = orderSlice.reducer;
