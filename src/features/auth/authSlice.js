import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

let initialState = {
  user: {},
  isLoading: false,
  isError: false,
  isSuccess: false,
  error: '',
};

export const fetchUser = createAsyncThunk('auth/fetchUser', async (token) => {
  const response = await fetch(`https://job-portal-server-production-d8dc.up.railway.app/api/v1/user/me`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  console.log(data);
  return data?.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logOut: (state, action) => {
      state.user = {
        email: '',
        role: '',
      };
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, { payload }) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
        state.error = '';
      })
      .addCase(fetchUser.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = payload;
        state.error = '';
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = false;
        state.error = action.error.message;
      });
  },
});

export const { logOut, setUser } = authSlice.actions;
export default authSlice.reducer;
