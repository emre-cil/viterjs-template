import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  user: null,
  mode: window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, accessToken } = action.payload;
      state.user = user;
      state.token = accessToken;
    },
    logOut: (state) => {
      state.user = null;
      state.token = null;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    changeMode: (state) => {
      if (state.mode === 'light') {
        state.mode = 'dark';
      } else {
        state.mode = 'light';
      }
    },
  },
});

export const { setCredentials, logOut, setToken, changeMode } = userSlice.actions;

export const selectUser = (state) => state.user.user;

export const selectToken = (state) => state.user.token;

export const selectMode = (state) => state.user.mode;

export default userSlice.reducer;
