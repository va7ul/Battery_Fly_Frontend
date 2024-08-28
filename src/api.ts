import axios from 'axios';
import { baseURL } from './utils/constants/baseURL';
import toast from 'react-hot-toast';

axios.defaults.baseURL = baseURL;

type Email = {
  email: string;
}

type DataUser = {
  name: string;
  text: string;
  tel: string;
};

type Passwords = {
  password: string;
  newPassword: string;
};

type OrderData = {
  name: string;
  codeOfGood: string;
  userName: string;
  tel: string;
};

const handleError = (error: any): string => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const addQuickOrder = async (orderData: OrderData) => {
  try {
    const data = await axios.post<{ message: string }>(
      'order/quick-order',
      orderData
    );
    return data;
  } catch (error: any) {
    toast.error('Сталася помилка, спробуйте ще раз');
  }
};

export const addFeedback = async (dataUser: DataUser)  => {
  try {
    const data = await axios.post<{ message: string }>(`feedback`, dataUser);
    return data;
  } catch (error: any) {
    toast.error('Сталася помилка, спробуйте ще раз');
  }
};

export const forgotPassword = async (email: Email) => {
  try {
    const  data = await axios.post<{ message: string }>(
      'auth/forgot-password',
      email
    );
    return data;
  } catch (error: any) {
    toast.error('Сталася помилка, спробуйте ще раз');
  }
};

export const changePassword = async (passwords: Passwords) => {
  try {
    const data = await axios.post<{ message: string }>(
      'user/change-password',
      passwords
    );
    toast.success('Новий пароль збережено!', {
    });
    return data;
  } catch (error:any) {
    if (error.response.data.message === 'Email or password is wrong') {
      toast.error('Невірний пароль.', {
      });
      return;
    }
    toast.error('Сталася помилка, спробуйте ще раз', {
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
