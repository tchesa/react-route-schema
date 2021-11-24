import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../index'
import { User } from '../../services/firebase'

type AuthState = {
  data?: User
  loading: boolean
  error?: any
}

const initialState: AuthState = {
  loading: false,
}

export type LoginPayload = {
  email: string,
  password: string
}

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    login: (state, _: PayloadAction<LoginPayload>) => {
      state.loading = true
      state.error = undefined
      state.data = undefined
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      state.loading = false
      state.error = undefined
      state.data = action.payload
    },
    loginFailure: (state, action: PayloadAction<any>) => {
      state.data = undefined
      state.loading = false
      state.error = action.payload
    },
  }
})

export const { login, loginSuccess, loginFailure } = authorizationSlice.actions

export const selectAuthorization = (state: RootState) => state.auth.data

export default authorizationSlice.reducer
