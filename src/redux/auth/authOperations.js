import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { baseURL } from 'utils/constants/baseURL';

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
  'auth/signup',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await axios.post('auth/signup', dataUser);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

export const login = createAsyncThunk(
  'auth/signin',
  async (dataUser, thunkApi) => {
    try {
      const { data } = await axios.post('auth/signin', dataUser);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);

// export const forgotPassword = createAsyncThunk(
//   'auth/forgot-password',
//   async (dataUser, thunkAPI) => {
//     try {
//       await axios.post('auth/forgot-password', dataUser);
//     } catch (error) {
//       const errorMessage = handleError(error);
//       return thunkAPI.rejectWithValue(errorMessage);
//     }
//   }
// );

// export const verifyEmail = createAsyncThunk(
//   'auth/verify-email',
//   async (dataUser, thunkAPI) => {
//     try {
//       await axios.post('auth/verify-email', dataUser);
//     } catch (error) {
//       const errorMessage = handleError(error);
//       return thunkAPI.rejectWithValue(errorMessage);
//     }
//   }
// );

export const logOut = createAsyncThunk('auth/signout', async (_, thunkAPI) => {
  try {
    await axios.post('auth/signout');
    clearAuthHeader();
  } catch (error) {
    const errorMessage = handleError(error);
    return thunkAPI.rejectWithValue(errorMessage);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const { token } = thunkAPI.getState().auth;

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
