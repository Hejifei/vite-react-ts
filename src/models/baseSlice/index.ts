import {createSlice} from '@reduxjs/toolkit'
import reducers from './reducers'

const initialState: IBaseModel.IState = {
  isLoading: false,
  value: 0,
}

export const baseSlice = createSlice({
  name: 'base',
  initialState,
  reducers,
})

export const {changeLoading, increment, decrement, incrementByAmount} = baseSlice.actions

export default baseSlice.reducer
