import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '@/features/counter/counterSlice';
import userReducer from '@/features/user/userSlice';
import apiSlice from './api/apiSlice';

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    counter: counterReducer,
    user: userReducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat(apiSlice.middleware),
  devTools: false,
});

export default store;
