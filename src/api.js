import axios from 'axios';
import { baseURL } from './utils/constants/baseURL';
import toast from 'react-hot-toast';

axios.defaults.baseURL = baseURL;
axios.defaults.headers.common['Authorization'] =
  JSON.parse(localStorage.getItem('user'))?.token ?? '';

const handleError = error => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const addQuickOrder = async orderData => {
  try {
    const data = await axios.post('order/quick-order', orderData);
    return data;
  } catch (error) {
    toast.error('Вибачте, сталася помилка. Спробуйте ще раз.');
  }
};

export const addFeedback = async dataUser => {
  try {
    const data = await axios.post(`feedback`, dataUser);
    return data;
  } catch (error) {
    toast.error('Вибачте, сталася помилка. Спробуйте ще раз.');
  }
};

export const forgotPassword = async email => {
  try {
    const data = await axios.post('auth/forgot-password', email);
    return data;
  } catch (error) {
    toast.error('Вибачте, сталася помилка. Спробуйте ще раз.');
  }
};

export const changePassword = async passwords => {
  try {
    const data = await axios.post('user/change-password', passwords);
    toast.success('Зміну пароля виконано успішно!', {
      duration: 5000,
    });
    return data;
  } catch (error) {
    if (error.response.data.message === 'Email or password is wrong') {
    toast.error('Невірний пароль.', {
      duration: 5000,
    });
      return;
    }
    toast.error('Вибачте, сталася помилка. Спробуйте ще раз.', {
      duration: 5000,
    });
  }
};

export const getHeroImages = async () => {
  try {
    const res = await axios.get('hero');
    return res.data.image;
  } catch (error) {
    const errorMessage = handleError(error);
    console.log('errorMessage', errorMessage);
  }
};
