import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle',
  message: '',
}

const copilotSlice = createSlice({
  name: 'copilot',
  initialState,
  reducers: {
    updateMessage: (state, action) => {
      state.message = action.payload
    },
  },
})

export const { updateMessage } = copilotSlice.actions
export default copilotSlice.reducer
