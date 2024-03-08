import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: '',
  userId: '',
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authLogin: (state, action) => {
      state.isAuthenticated = action.payload?.authenticated;
      state.userId = action.payload?.userId;
    },
    authLogout: (state) => {
      state.isAuthenticated = false;
      state.userId = null;
      state.user = null;
    },
    setUserData: (state, action) => { 
      state.user = action.payload; // Action to set user data after decoding
    }
  },
});

export const { authLogin, authLogout, setUserData } = authSlice.actions;
export default authSlice.reducer;

