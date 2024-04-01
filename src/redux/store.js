import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { userReducer } from './auth/authSlice';
// import { userReducer } from './user/userSlice';
import { oneProductReducer } from './products/oneProductSlice';
import { productsListReducer } from './products/productsListSlice';
import { basketReducer } from './basket/basketSlice';
import { menuReducer } from './menu/menuSlice';
import { feedbackReducer } from './feedback/feedbackSlice';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token'],
};

const basketPersistConfig = {
  key: 'basket',
  storage,
  whitelist: ['items', 'total'],
};

const productsReducer = combineReducers({
  oneProduct: oneProductReducer,
  productsList: productsListReducer,
});

export const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, userReducer),
    // user: userReducer,
    products: productsReducer,
    basket: persistReducer(basketPersistConfig, basketReducer),
    menu: menuReducer,
    feedback: feedbackReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
