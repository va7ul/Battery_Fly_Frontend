import { createSlice } from '@reduxjs/toolkit';
import { BatteryConfig } from '../../@types/products.types';
import { ProductWithNewPrice } from '../../@types/order.types';

export type BasketItem = {
  capacityKey?: string;
  selectedSealing?: boolean;
  selectedHolder?: boolean;
  quantityOrdered: number;
  totalPrice: number;
  priceOneProduct: number;
    _id: string;
  codeOfGood: string;
  name: string;
  description: string;
  image: string[];
  price: number | string;
  quantity: number;
  sale: boolean;
  discount: number;
  popular: boolean;
  category: string;
  type?: string;
  information: string;
  capacity?: BatteryConfig;
  holder?: boolean;
  createdAt: string;
  updatedAt: string;
}

type InitialState = {
  items: BasketItem[];
  total: number;
  arrOfProductsWithUpdatedPrice: ProductWithNewPrice[];
  isLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  items: [],
  total: 0,
  arrOfProductsWithUpdatedPrice: [],
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
        quantity,
      } = action.payload;

      const findingIndex = state.items.findIndex(
        item =>
          item.codeOfGood === codeOfGood &&
          item.capacityKey === capacityKey &&
          item.selectedSealing === selectedSealing &&
          item.selectedHolder === selectedHolder
      );
      if (state.items[findingIndex].quantityOrdered < quantity) {
        state.items[findingIndex].quantityOrdered += 1;
        state.items[findingIndex].totalPrice += price;
        state.total += price;
      }
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
      if (state.items[findingIndex].quantityOrdered > 1) {
        state.items[findingIndex].quantityOrdered -= 1;
        state.items[findingIndex].totalPrice -= price;
        state.total -= price;
      }
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

    changeAllQuantity(state, action) {
      const {
        codeOfGood,
        capacityKey,
        selectedSealing,
        selectedHolder,
        quantity,
      } = action.payload;

      const findingIndex = state.items.findIndex(
        item =>
          item.codeOfGood === codeOfGood &&
          item.capacityKey === capacityKey &&
          item.selectedSealing === selectedSealing &&
          item.selectedHolder === selectedHolder
      );
      state.items[findingIndex].quantity = quantity;
    },

    changePrice(state, { payload }) {
      const {
        codeOfGood,
        capacityKey,
        selectedSealing,
        selectedHolder,
        quantityOrdered,
        price,
      } = payload;

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
      state.items[findingIndex].price = price;
    },

    addProductWithUpdatedPrice(state, { payload }) {
      state.arrOfProductsWithUpdatedPrice.push(payload);
    },

    clearArrOfProductsWithUpdatedPrice(state, { payload }) {
      state.arrOfProductsWithUpdatedPrice = payload;
    },

    clearBasket(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
  changeQuantity,
  changeAllQuantity,
  changePrice,
  addProductWithUpdatedPrice,
  clearArrOfProductsWithUpdatedPrice,
  clearBasket,
} = basketSlice.actions;
export const basketReducer = basketSlice.reducer;
