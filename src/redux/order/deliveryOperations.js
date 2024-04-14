import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const handleError = error => {
  if (error.response && error.response.data && error.response.data.message) {
    return `Oops! Something was wrong... ${error.response.data.message}`;
  } else {
    return `Oops! Something was wrong... ${error.message}`;
  }
};

export const getDeliveryCity = createAsyncThunk(
  'order/getDeliveryCity',
  async (reqCity, thunkApi) => {
    try {
      const reqData = {
        apiKey: '444fb2a23b7eb84746393c582580c68c',
        modelName: 'Address',
        calledMethod: 'getCities',
        methodProperties: {
          Page: '1',
          FindByString: reqCity,
          Limit: '20',
        },
      };

      console.log(reqCity);

      const { data } = await axios.post(
        'https://api.novaposhta.ua/v2.0/json/searchSettlements',
        reqData
      );
      return data;
    } catch (error) {
      const errorMessage = handleError(error);
      return thunkApi.rejectWithValue(errorMessage);
    }
  }
);
