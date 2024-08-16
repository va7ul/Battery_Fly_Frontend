import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { orderData, PromoCode } from '../../@types/order.types';
import { baseURL } from 'utils/constants/baseURL';
import toast from 'react-hot-toast';

type ErrorResponse = {
  message: string;
};

axios.defaults.baseURL = baseURL;

const handleError = (error: any): string => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const addOrder = createAsyncThunk<
  { orderNum: string },
  orderData,
  { rejectValue: string }
>('order/addOrder', async (orderData, thunkApi) => {
  try {
    const { data } = await axios.post<{ orderNum: string }>(
      'order/add-order',
      orderData
    );
    return data;
  } catch (error:any) {
    const errorMessage = handleError(error);
    toast.error('Сталася помилка, спробуйте ще раз', {
      id: 'error',
    });
    return thunkApi.rejectWithValue(errorMessage);
  }
});

export const getDeliveryCities = createAsyncThunk(
  'order/getDeliveryCity',
  async (reqCity, thunkApi) => {
    const reqData = { query: reqCity };
    try {
      const { data } = await axios.post('order/getDeliveryCity', reqData);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getDeliveryWarehouses = createAsyncThunk(
  'order/getWarehouses',
  async (reqWarehouses, thunkApi) => {
    try {
      const reqData = { query: reqWarehouses };
      const { data } = await axios.post('order/getWarehouses', reqData);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const addPromoCode = createAsyncThunk<
  { promoCode: PromoCode },
  string,
  { rejectValue: string }
>('order/addPromoCode', async (name, thunkApi) => {
  try {
    const { data } = await axios.get<{ promoCode: PromoCode }>(
      `order/promo-code/${name}`
    );
    toast.success('Промокод застосовано!');

    return data;
  } catch (err) {
    const error = err as AxiosError<ErrorResponse>;
    const errorMessage = handleError(error);
    console.error(errorMessage);

    const errorResponseMessage = error.response?.data?.message;
    if (errorResponseMessage === 'Bad request') {
      return thunkApi.rejectWithValue('*Промокод недійсний, спробуйте інший!');
    } else if (errorResponseMessage === 'promoCode not valid') {
      return thunkApi.rejectWithValue(
        '*Термін дій промокоду завершився, спробуйте інший!'
      );
    } else if (errorResponseMessage === 'promoCode already in use') {
      return thunkApi.rejectWithValue(
        '*Ви вже використали даний промокод, спробуйте інший!'
      );
    } else {
      toast.error('Сталася помилка, спробуйте ще раз');
      return thunkApi.rejectWithValue('Сталася помилка, спробуйте ще раз!');
    }
  }
});
