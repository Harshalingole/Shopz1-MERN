import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

interface Credentials {
  email: string;
  password: string;
}

interface AuthState {
  user: any;
  loading: boolean;
  error: string | null;
}

export const loginUser = createAsyncThunk<any, Credentials>(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch(`http://localhost:4000/api/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      return console.log(error);
      
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
  } as AuthState,
  reducers: {
    reset: (state) => ({
      user: null,
      loading: false,
      error: null,
    } as AuthState),
  },
  extraReducers: {
    [loginUser.pending.type]: (state) => {
      state.loading = true;
      state.error = null;
    },
    [loginUser.fulfilled.type]: (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
    },
    [loginUser.rejected.type]: (state, action) => {
      state.user = null;
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
