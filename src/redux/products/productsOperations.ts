import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Product } from '../../@types/products.types';
import { baseURL } from 'utils/constants/baseURL';

axios.defaults.baseURL = baseURL;

const handleError = (error: any): string => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const getAssortment = createAsyncThunk<
  { result: Product[] },
  undefined,
  { rejectValue: string }
>('products/getAssortment', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Product[] }>('products');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getProducts = createAsyncThunk<
  { result: Product[] },
  string[],
  { rejectValue: string }
>('products/getProducts', async (products, thunkApi) => {
  try {
    const { data } = await axios.post<{ result: Product[] }>('products', {
      products,
    });

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.error(errorMessage);

    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getSales = createAsyncThunk<
  { result: Product[] },
  undefined,
  { rejectValue: string }
>('products/getSales', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Product[] }>('products/sale');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getAllBatteries = createAsyncThunk<
  { result: Product[] },
  undefined,
  { rejectValue: string }
>('products/getAllBatteries', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Product[] }>(
      'products/batteries'
    );

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getBatteries18650 = createAsyncThunk<
  { result: Product[] },
  undefined,
  { rejectValue: string }
>('products/getBatteries18650', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Product[] }>(
      'products/batteries/18650'
    );

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getBatteries21700 = createAsyncThunk<
  { result: Product[] },
  undefined,
  { rejectValue: string }
>('products/getBatteries21700', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Product[] }>(
      'products/batteries/21700'
    );

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getBatteries32650 = createAsyncThunk<
  { result: Product[] },
  undefined,
  { rejectValue: string }
>('products/getBatteries32650', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Product[] }>(
      'products/batteries/32650'
    );

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getBatterieslipo = createAsyncThunk<
  { result: Product[] },
  undefined,
  { rejectValue: string }
>('products/getBatterieslipo', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Product[] }>(
      'products/batteries/lipo'
    );

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getBatterieslifepo4 = createAsyncThunk<
  { result: Product[] },
  undefined,
  { rejectValue: string }
>('products/getBatterieslifepo4', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Product[] }>(
      'products/batteries/lifepo4'
    );

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getAssemblies = createAsyncThunk<
  { result: Product[] },
  undefined,
  { rejectValue: string }
>('products/getAssemblies', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Product[] }>(
      'products/assemblies'
    );

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getBatteriesForFPV = createAsyncThunk<
  { result: Product[] },
  undefined,
  { rejectValue: string }
>('products/getBatteriesForFPV', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Product[] }>(
      'products/batteries-for-fpv'
    );

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getBatteriesForTransport = createAsyncThunk<
  { result: Product[] },
  undefined,
  { rejectValue: string }
>('products/getBatteriesForTransport', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Product[] }>(
      'products/batteries-for-transport'
    );

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getBatteriesForToys = createAsyncThunk<
  { result: Product[] },
  undefined,
  { rejectValue: string }
>('products/getBatteriesForToys', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Product[] }>(
      'products/batteries-for-toys'
    );

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getDevices = createAsyncThunk<
  { result: Product[] },
  undefined,
  { rejectValue: string }
>('products/getDevices', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Product[] }>('products/devices');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getMaterials = createAsyncThunk<
  { result: Product[] },
  undefined,
  { rejectValue: string }
>('products/getMaterials', async (_, thunkApi) => {
  try {
    const { data } = await axios.get<{ result: Product[] }>(
      'products/materials'
    );

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getOneProduct = createAsyncThunk(
  'products/getOneProduct',
  async (productId, thunkApi) => {
    try {
      const { data } = await axios.get(`products/${productId}`);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
