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
import { userReducer } from './user/userSlice';
import { oneProductReducer } from './products/oneProductSlice';
import { productsListReducer } from './products/productsListSlice';
import { print3DReducer } from './print3D/print3DSlice';
import { basketReducer } from './basket/basketSlice';
import { menuReducer } from './menu/menuSlice';
import { orderReducer } from './order/orderSlice';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['token', 'isLoggedIn'],
};

const basketPersistConfig = {
  key: 'basket',
  storage,
  whitelist: ['items', 'total'],
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);
const persistedBasketReducer = persistReducer(
  basketPersistConfig,
  basketReducer
);

const productsReducer = combineReducers({
  oneProduct: oneProductReducer,
  productsList: productsListReducer,
});

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    products: productsReducer,
    print3D: print3DReducer,
    basket: persistedBasketReducer,
    menu: menuReducer,
    order: orderReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const persistor = persistStore(store);
