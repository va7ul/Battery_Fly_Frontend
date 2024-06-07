import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from 'utils/constants/baseURL';
import toast from 'react-hot-toast';

axios.defaults.baseURL = baseURL;

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const handleError = error => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const register = createAsyncThunk(
  'user/signup',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await axios.post('auth/signup', dataUser);
      toast.success('Реєстрація пройшла успішно!', {
        duration: 5000,
      });
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      if (error.request.status === 409) {
        return thunkApi.rejectWithValue(error.response.data.message);
      }
      toast.error('Вибачте, сталася помилка. Спробуйте ще раз.', {
        duration: 5000,
      });
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const login = createAsyncThunk(
  'user/signin',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await axios.post('auth/signin', dataUser);
      setAuthHeader(data.token);
      toast.success('Вітаємо! Вхід виконано успішно!', {
        duration: 5000,
      });
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      if (error.request.status === 401) {
        return thunkApi.rejectWithValue(error.response.data.message);
      }
      toast.error('Вибачте, сталася помилка. Спробуйте ще раз.', {
        duration: 5000,
      });
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const logOut = createAsyncThunk('user/signout', async (_, thunkAPI) => {
  try {
    await axios.post('auth/signout');
    clearAuthHeader();
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue(errorMessage);
  } finally {
    toast.success('Вихід з профілю виконано успішно!', {
      duration: 5000,
    });
  }
});

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().user;

    if (token === '') {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(token);
      const { data } = await axios.get('auth/current');
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const editUserData = createAsyncThunk(
  'user/editUserData',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await axios.post('user/change-info', dataUser);
      toast.success('Редагування даних виконано успішно!', {
        duration: 5000,
      });
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      toast.error('Вибачте, сталася помилка. Спробуйте ще раз.', {
        duration: 5000,
      });
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const editUserAddress = createAsyncThunk(
  'user/editUseAddress',
  async (address, thunkApi) => {
    try {
      const { data } = await axios.post('user/change-delivery', address);
      toast.success('Aдресу доставки збережено!', {
        duration: 5000,
      });
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      toast.error('Вибачте, сталася помилка. Спробуйте ще раз.', {
        duration: 5000,
      });
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const verifyEmail = createAsyncThunk(
  'user/verifyEmail',
  async (email, thunkAPI) => {
    try {
      const { data } = await axios.post('user/resend', email);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      toast.error('Вибачте, сталася помилка. Спробуйте ще раз.', {
        duration: 5000,
      });
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const addToFavorite = createAsyncThunk(
  'user/addToFavorite',
  async (id, thunkAPI) => {
    const { token } = thunkAPI.getState().user;

    try {
      setAuthHeader(token);
      const { data } = await axios.post(`user/favorite/${id}`);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const deleteFromFavorite = createAsyncThunk(
  'user/deleteFromFavorite',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`user/favorite/${id}`);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getOrdersHistory = createAsyncThunk(
  'user/getOrdersHistory',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().user;

    try {
      setAuthHeader(token);
      const { data } = await axios.get('order/get-orders');

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const getOrderDetails = createAsyncThunk(
  'user/getOrderDetails',
  async (id, thunkAPI) => {
    const { token } = thunkAPI.getState().user;

    try {
      setAuthHeader(token);
      const { data } = await axios.get(`order/get-order/${id}`);

      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);
