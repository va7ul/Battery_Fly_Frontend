import { createSlice } from '@reduxjs/toolkit';
import { getPrint3D } from '../print3D/print3DOperations';

const initialState = {
  result: {
    name: '',
    description: '',
    image: [],
    information: '',
    accuracy: [],
    plactic: [],
    color: [],
    table1: {},
    table2: {},
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
    setAccuracy(state, action) {
      state.selectedAccuracy = action.payload;
    },
    setPlactic(state, action) {
      state.selectedPlactic = action.payload;
    },
    setColor(state, action) {
      state.selectedColor = action.payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getPrint3D.pending, state => {
        state.isLoading = true;
      })
      .addCase(getPrint3D.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.result = action.payload.print3d;
      })
      .addCase(getPrint3D.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setAccuracy, setPlactic, setColor } = print3DSlice.actions;
export const print3DReducer = print3DSlice.reducer;
