import { createSlice } from '@reduxjs/toolkit';

type InitialState = {
  isMenuOpen: boolean;
  isSubMenuOpen: boolean;
  isThirdMenuOpen: boolean;
  isCartOpen: boolean;
}

const initialState: InitialState = {
  isMenuOpen: false,
  isSubMenuOpen: false,
  isThirdMenuOpen: false,
  isCartOpen: false,
};

const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setMenuOpen(state, action) {
      state.isMenuOpen = action.payload;
    },
    setSubMenuOpen(state, action) {
      state.isSubMenuOpen = action.payload;
    },
    setThirdMenuOpen(state, action) {
      state.isThirdMenuOpen = action.payload;
    },
    setCartOpen(state, action) {
      state.isCartOpen = action.payload;
    },
  },
});

export const { setMenuOpen, setSubMenuOpen, setThirdMenuOpen, setCartOpen } =
  menuSlice.actions;
export const menuReducer = menuSlice.reducer;
