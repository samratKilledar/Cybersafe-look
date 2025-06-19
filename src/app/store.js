import { configureStore } from '@reduxjs/toolkit'
import copilotReducer from '../features/copilot/copilotSlice'

export const store = configureStore({
  reducer: {
    copilot: copilotReducer,
  },
})

