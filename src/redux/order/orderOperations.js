import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from 'utils/constants/baseURL';
import toast from 'react-hot-toast';

axios.defaults.baseURL = baseURL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const handleError = error => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const addOrder = createAsyncThunk(
  'order/addOrder',
  async (orderData, thunkApi) => {
    try {
      const { data } = await axios.post('order/add-order', orderData);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      toast.error('Сталася помилка, спробуйте ще раз', {
        id: 'error',
      });
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

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

export const addPromoCode = createAsyncThunk(
  'order/addPromoCode',
  async (name, thunkApi) => {
    const { token } = thunkApi.getState().user;

    try {
      setAuthHeader(token);
      const { data } = await axios.get(`order/promo-code/${name}`);
      toast.success('Промокод застосовано!');

      return data;
    } catch (error) {
      console.log(error.response);
      if (error.response.data.message === 'Bad request') {
        return thunkApi.rejectWithValue(
          '*Промокод недійсний, спробуйте інший!'
        );
      } else if (error.response.data.message === 'promoCode not valid') {
        return thunkApi.rejectWithValue(
          '*Термін дій промокоду завершився, спробуйте інший!'
        );
      } else if (error.response.data.message === 'promoCode already in use') {
        return thunkApi.rejectWithValue(
          '*Ви вже використали даний промокод, спробуйте інший!'
        );
      } else {
        toast.error('Сталася помилка, спробуйте ще раз');
        return thunkApi.rejectWithValue('Сталася помилка, спробуйте ще раз!');
      }
    }
  }
);
