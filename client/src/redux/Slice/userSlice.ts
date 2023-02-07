import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { userSliceProp } from '../../types/types'

export interface UserState {
  user: userSliceProp | null;
  isUser: boolean;
}

const initialState: UserState = {
  user: null,
  isUser: false,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state,action: PayloadAction<userSliceProp>) => {
      state.user = action.payload;
      state.user == null ? state.isUser = false : state.isUser = true;
    },
    isUser: (state) => {
      state.user == null ? state.isUser = false : state.isUser = true
    }
    // increment: (state) => {
      
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { setUser,isUser } = userSlice.actions

export default userSlice.reducer