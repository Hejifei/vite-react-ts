import {PayloadAction} from '@reduxjs/toolkit'

import store from '@/store'

/**
 * 触发action
 * @param action
 */
export const dispatchAction = (action: PayloadAction<any> | {type: string}) => {
  store.dispatch(action)
}
