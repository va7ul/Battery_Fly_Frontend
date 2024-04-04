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
