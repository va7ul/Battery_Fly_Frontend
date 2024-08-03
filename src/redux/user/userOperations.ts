import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from 'utils/constants/baseURL';
import toast from 'react-hot-toast';
import { OrderData } from '../../@types/user.types';
import { Order } from '../../@types/order.types';

axios.defaults.baseURL = baseURL;

const setAuthHeader = (token: string) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

const handleError = (error: any): string => {
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
      toast.success('Реєстрація пройшла успішно!');
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      if (error.request.status === 409) {
        return thunkApi.rejectWithValue(error.response.data.message);
      }
      toast.error('Сталася помилка, спробуйте ще раз');
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
      toast.success('Вітаємо! Вхід виконано успішно!');
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      if (error.request.status === 401) {
        return thunkApi.rejectWithValue(error.response.data.message);
      }
      toast.error('Сталася помилка, спробуйте ще раз');
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
    toast.success('Вихід з профілю виконано успішно!');
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
      toast.error('Сталася помилка, спробуйте ще раз');
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const editUserData = createAsyncThunk(
  'user/editUserData',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await axios.post('user/change-info', dataUser);
      toast.success('Дані збережено!');
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

export const editUserAddress = createAsyncThunk(
  'user/editUseAddress',
  async (address, thunkApi) => {
    try {
      const { data } = await axios.post('user/change-delivery', address);
      toast.success('Aдресу доставки збережено!');
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

export const verifyEmail = createAsyncThunk(
  'user/verifyEmail',
  async (email, thunkAPI) => {
    try {
      const { data } = await axios.post('user/resend', email);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      toast.error('Сталася помилка, спробуйте ще раз');
      return thunkAPI.rejectWithValue(errorMessage);
    }
  }
);

export const addToFavorite = createAsyncThunk<
  { favorites: string[] },
  string,
  { rejectValue: string }
>('user/addToFavorite', async (id, thunkAPI) => {
  try {
    const { data } = await axios.post<{ favorites: string[] }>(
      `user/favorite/${id}`
    );
    toast.remove();
    toast.success('Додано до улюблених!');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    toast.error('Сталася помилка, спробуйте ще раз', {
      id: 'error',
    });

    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const deleteFromFavorite = createAsyncThunk<
  { favorites: string[] },
  string,
  { rejectValue: string }
>('user/deleteFromFavorite', async (id, thunkAPI) => {
  try {
    const { data } = await axios.delete<{ favorites: string[] }>(
      `user/favorite/${id}`
    );
    toast.remove();
    toast.success('Видалено з улюблених!');

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    toast.error('Сталася помилка, спробуйте ще раз', {
      id: 'error',
    });

    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const getOrdersHistory = createAsyncThunk<
  { result: OrderData[] },
  undefined,
  { rejectValue: string }
>('user/getOrdersHistory', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get<{ result: OrderData[] }>(
      'order/get-orders'
    );

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    toast.error('Сталася помилка, спробуйте ще раз');

    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const getOrderDetails = createAsyncThunk<
  { result: Order },
  string,
  { rejectValue: string }
>('user/getOrderDetails', async (id, thunkAPI) => {
  try {
    const { data } = await axios.get<{ result: Order }>(
      `order/get-order/${id}`
    );

    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    toast.remove();
    toast.error('Сталася помилка, спробуйте ще раз');

    return thunkAPI.rejectWithValue(errorMessage);
  }
});
