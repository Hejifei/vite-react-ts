import store from '@/store'
import {PayloadAction} from '@reduxjs/toolkit'

/**
 * 触发action
 * @param action
 */
export const dispatchAction = (action: PayloadAction<any> | {type: string}) => {
  store.dispatch(action)
}
