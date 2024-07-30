import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPrint3D } from './print3DOperations';
import { Data } from '../../@types/print3D.types';

type InitialState = {
  result: Data;
  selectedAccuracy: string | null;
  selectedPlactic: string | null;
  selectedColor: string | null;
  isLoading: boolean;
  error: string | null;
};

const initialState: InitialState = {
  result: {
    name: '',
    description: '',
    image: [],
    information: '',
    accuracy: [],
    plactic: [],
    color: [],
    table1: null,
    table2: null,
  },
  selectedAccuracy: null,
  selectedPlactic: null,
  selectedColor: null,
  isLoading: false,
  error: null,
};

const print3DSlice = createSlice({
  name: 'print3D',
  initialState,
  reducers: {
    setAccuracy(state: InitialState, { payload }: PayloadAction<string>) {
      state.selectedAccuracy = payload;
    },
    setPlactic(state: InitialState, { payload }: PayloadAction<string>) {
      state.selectedPlactic = payload;
    },
    setColor(state: InitialState, { payload }: PayloadAction<string>) {
      state.selectedColor = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getPrint3D.pending, (state: InitialState) => {
        state.isLoading = true;
      })
      .addCase(
        getPrint3D.fulfilled,
        (
          state: InitialState,
          { payload }: PayloadAction<{ print3d: Data }>
        ) => {
          state.isLoading = false;
          state.error = null;
          state.result = payload.print3d;
        }
      )
      .addCase(
        getPrint3D.rejected,
        (
          state: InitialState,
          { payload }: PayloadAction<string | undefined>
        ) => {
          state.isLoading = false;
          state.error = payload ?? 'Unknown error';
        }
      ),
});

export const { setAccuracy, setPlactic, setColor } = print3DSlice.actions;
export const print3DReducer = print3DSlice.reducer;
