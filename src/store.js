import { configureStore } from '@reduxjs/toolkit'
import dataReducer from './services/dataSlice'

export const store = configureStore({
  reducer: {
    data: dataReducer
  },
})