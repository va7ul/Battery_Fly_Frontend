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

export const updateUser = createAsyncThunk(
  'user/update-profile',
  async (dataUser, thunkApi) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    try {
      const { data } = await axios.put('user/update', dataUser, config);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getFavorites = createAsyncThunk(
  'user/getFavorites',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await axios.get('user/favorite', dataUser);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const addToFavorites = createAsyncThunk(
  'user/addToFavorites',
  async (id, thunkApi) => {
    try {
      const { data } = await axios.post(`user/favorite`, id);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const deleteFromFavorites = createAsyncThunk(
  'user/deleteFromFavorites',
  async (dataUser, id, thunkApi) => {
    try {
      const { data } = await axios.delete(`user/favorite/${id}`, dataUser);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getAllOrders = createAsyncThunk(
  'user/getAllOrders',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await axios.get('user/orders', dataUser);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const getOneOrder = createAsyncThunk(
  'user/getOneOrder',
  async (dataUser, id, thunkApi) => {
    try {
      const { data } = await axios.get(`user/order/${id}`, dataUser);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
