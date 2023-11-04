import { configureStore } from '@reduxjs/toolkit';
import  appSlice  from './app/appSlice';
import productSlice from './products/productSlice';
import userSlice from './user/userSlice';
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer } from 'redux-persist'
const comonConfig = {
  key: 'shop/user',
  storage
}
const userConfig = {
  ...comonConfig,
  whitelist: ['isLoggedIn', 'token']
}

export const store = configureStore({
  reducer: {
    app: appSlice,
    products: productSlice,
    user: persistReducer(userConfig, userSlice)
  },
});

export const persistor =  persistStore(store)
