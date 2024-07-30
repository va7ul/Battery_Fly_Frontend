import { RootState } from 'redux/store';

export const selectPrint3DIsLoading = (state: RootState) =>
  state.print3D.isLoading;
export const selectPrint3DError = (state: RootState) => state.print3D.error;
export const selectPrint3D = (state: RootState) => state.print3D.result;
export const selectedAccuracy = (state: RootState) =>
  state.print3D.selectedAccuracy;
export const selectedPlactic = (state: RootState) =>
  state.print3D.selectedPlactic;
export const selectedColor = (state: RootState) => state.print3D.selectedColor;
