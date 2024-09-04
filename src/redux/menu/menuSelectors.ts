import { RootState } from "redux/store";

export const selectMenu = (state: RootState) => state.menu.isMenuOpen;
export const selectSubMenu = (state: RootState) => state.menu.isSubMenuOpen;
export const selectThirdMenu = (state: RootState) => state.menu.isThirdMenuOpen;
export const selectCart = (state: RootState) => state.menu.isCartOpen;
