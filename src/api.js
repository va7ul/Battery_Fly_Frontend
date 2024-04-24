import axios from 'axios';
import { baseURL } from './utils/constants/baseURL';

axios.defaults.baseURL = baseURL;

const handleError = error => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const addQuickOrder = async orderData => {
  try {
    const data = await axios.post('quick-order', orderData);
    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.log('errorMessage', errorMessage);
  }
};

export const addFeedback = async dataUser => {
  try {
    const data = await axios.post(`feedback`, dataUser);
    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.log('errorMessage', errorMessage);
  }
};

export const forgotPassword = async email => {
  try {
    const data = await axios.post('auth/forgot-password', email);
    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.log('errorMessage', errorMessage);
  }
};

export const add3DPrintOrder = async orderData => {
  try {
    const data = await axios.post('3dprint-order', orderData);
    return data;
  } catch (error) {
    const errorMessage = handleError(error);
    console.log('errorMessage', errorMessage);
  }
};
