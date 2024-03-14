import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  total: 0,
  isLoading: false,
  error: null,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },
    deleteItem(state, action) {
      state.total -= action.payload.price * action.payload.quantity;
      state.items = state.items.filter(
        item => item.codeOfGood !== action.payload.codeOfGood
      );
    },
    increaseQuantity(state, action) {
      for (const item of state.items) {
        if (item.codeOfGood === action.payload.codeOfGood) {
          item.quantity += 1;
          state.total += item.price;
          break;
        }
      }
    },
    decreaseQuantity(state, action) {
      for (const item of state.items) {
        if (item.codeOfGood === action.payload.codeOfGood) {
          if (item.quantity > 1) {
            item.quantity -= 1;
            state.total -= item.price;
            break;
          }
          break;
        }
      }
    },
    changeQuantity(state, action) {
      for (const item of state.items) {
        if (item.codeOfGood === action.payload.codeOfGood) {
          state.total =
            state.total -
            item.price * item.quantity +
            item.price * action.payload.quantity;
          item.quantity = action.payload.quantity;
          break;
        }
      }
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  changeQuantity,
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
