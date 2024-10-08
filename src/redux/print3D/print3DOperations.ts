import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from 'utils/constants/baseURL';
import toast from 'react-hot-toast';
import { Data } from '../../@types/print3D.types';

axios.defaults.baseURL = baseURL;

const handleError = (error: any): string => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const getPrint3D = createAsyncThunk<
  { print3d: Data },
  undefined,
  { rejectValue: string }
>('print3D/getPrint3D', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ print3d: Data }>(`3dprint`);
    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const add3DPrintOrder = createAsyncThunk<
  undefined,
  FormData,
  { rejectValue: string }
>('print3D/add3DPrintOrder', async (orderData, thunkApi) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  try {
    const { data } = await axios.post<undefined>('3dprint', orderData, config);
    return data;
  } catch (error: any) {
    const errorMessage = handleError(error);
    toast.error('Сталася помилка, спробуйте ще раз');
    return thunkApi.rejectWithValue(errorMessage);
  }
});
