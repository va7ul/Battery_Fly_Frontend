import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from 'utils/constants/baseURL';

axios.defaults.baseURL = baseURL;

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
      const { data } = await axios.post('order', orderData);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getDeliveryCity = createAsyncThunk(
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
