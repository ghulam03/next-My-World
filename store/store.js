import authReducer from "./authSlice"
import cartReducer from "./cartSlice"
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import userReducer from"./userSlice"

export  const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart:cartReducer,
    user:userReducer,
    auth:authReducer,
  },
})
