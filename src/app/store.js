import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/user/userSlice';
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './api/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    user: userReducer,
    counter: counterReducer,
  },
  middleware: (getdefaultMiddleware) => getdefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});
