import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios({
      method: 'POST',
      url: 'users/signup',
      data: credentials,
    });
    token.set(data.token);
    return data;
  } catch (error) {}
});
export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios({
      method: 'POST',
      url: 'users/login',
      data: credentials,
    });
    token.set(data.token);
    return data;
  } catch (error) {}
});
export const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios({
      method: 'POST',
      url: 'users/logout',
    });
    token.unset();
  } catch (error) {}
});
export const getCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }
    token.set(persistedToken);
    try {
      const { data } = await axios({
        method: 'GET',
        url: 'users/current',
      });

      return data;
    } catch (error) {}
  }
);
