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
      state.total += action.payload.totalPrice;
    },
    deleteItem(state, action) {
      if (state.items.length === 1) {
        state.total = initialState.total;
      } else {
        state.total -= action.payload.totalPrice;
      }
      state.items = state.items.filter(
        item =>
          item.codeOfGood !== action.payload.codeOfGood &&
          item.capacityKey !== action.payload.capacityKey
      );
    },
    increaseQuantity(state, action) {
      for (const item of state.items) {
        if (
          item.codeOfGood === action.payload.codeOfGood &&
          item.capacityKey === action.payload.capacityKey
        ) {
          item.quantityOrdered += 1;
          item.totalPrice += item.price;
          state.total += item.price;
          break;
        }
      }
    },
    decreaseQuantity(state, action) {
      for (const item of state.items) {
        if (
          item.codeOfGood === action.payload.codeOfGood &&
          item.capacityKey === action.payload.capacityKey
        ) {
          if (item.quantityOrdered > 1) {
            item.quantityOrdered -= 1;
            item.totalPrice += item.price;
            state.total += item.price;
            break;
          }
          break;
        }
      }
    },
    changeQuantity(state, action) {
      for (const item of state.items) {
        if (
          item.codeOfGood === action.payload.codeOfGood &&
          item.capacityKey === action.payload.capacityKey
        ) {
          state.total =
            state.total - item.totalPrice + action.payload.totalPrice;
          item.quantityOrdered = action.payload.quantityOrdered;
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
