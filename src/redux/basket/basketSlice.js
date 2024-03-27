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
      const {
        codeOfGood,
        capacityKey,
        selectedSealing,
        selectedHolder,
        quantityOrdered,
        totalPrice,
      } = action.payload;

      const findingIndex = state.items.findIndex(
        item =>
          item.codeOfGood === codeOfGood &&
          item.capacityKey === capacityKey &&
          item.selectedSealing === selectedSealing &&
          item.selectedHolder === selectedHolder
      );

      if (findingIndex >= 0) {
        state.items[findingIndex].quantityOrdered += quantityOrdered;
        state.items[findingIndex].totalPrice += totalPrice;
        state.total += totalPrice;
      } else {
        state.items.push(action.payload);
        state.total += totalPrice;
      }
    },

    deleteItem(state, action) {
      const {
        totalPrice,
        codeOfGood,
        capacityKey,
        selectedSealing,
        selectedHolder,
      } = action.payload;

      const findingIndex = state.items.findIndex(
        item =>
          item.codeOfGood === codeOfGood &&
          item.capacityKey === capacityKey &&
          item.selectedSealing === selectedSealing &&
          item.selectedHolder === selectedHolder
      );

      if (state.items.length === 1) {
        state.total = initialState.total;
      } else {
        state.total -= totalPrice;
      }

      state.items.splice(findingIndex, 1);
    },

    increaseQuantity(state, action) {
      const {
        codeOfGood,
        capacityKey,
        selectedSealing,
        selectedHolder,
        price,
      } = action.payload;

      const findingIndex = state.items.findIndex(
        item =>
          item.codeOfGood === codeOfGood &&
          item.capacityKey === capacityKey &&
          item.selectedSealing === selectedSealing &&
          item.selectedHolder === selectedHolder
      );

      state.items[findingIndex].quantityOrdered += 1;
      state.items[findingIndex].totalPrice += price;
      state.total += price;
    },

    decreaseQuantity(state, action) {
      const {
        codeOfGood,
        capacityKey,
        selectedSealing,
        selectedHolder,
        price,
      } = action.payload;

      const findingIndex = state.items.findIndex(
        item =>
          item.codeOfGood === codeOfGood &&
          item.capacityKey === capacityKey &&
          item.selectedSealing === selectedSealing &&
          item.selectedHolder === selectedHolder
      );

      state.items[findingIndex].quantityOrdered -= 1;
      state.items[findingIndex].totalPrice -= price;
      state.total -= price;
    },

    changeQuantity(state, action) {
      const {
        codeOfGood,
        capacityKey,
        selectedSealing,
        selectedHolder,
        quantityOrdered,
        price,
      } = action.payload;

      const findingIndex = state.items.findIndex(
        item =>
          item.codeOfGood === codeOfGood &&
          item.capacityKey === capacityKey &&
          item.selectedSealing === selectedSealing &&
          item.selectedHolder === selectedHolder
      );

      const newTotalPrice = price * quantityOrdered;

      state.total =
        state.total - state.items[findingIndex].totalPrice + newTotalPrice;
      state.items[findingIndex].totalPrice = newTotalPrice;
      state.items[findingIndex].quantityOrdered = quantityOrdered;
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
