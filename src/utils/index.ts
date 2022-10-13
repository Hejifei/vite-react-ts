import {PayloadAction} from '@reduxjs/toolkit'

import {LOCALSTORAGE_X_AUTH_TOKEN} from '@/common'
import {LOCALSTORAGE_LANGUAGE_ZH} from '@/common/language'
import store from '@/store'

/**
 * 触发action
 * @param action
 */
export const dispatchAction = (action: PayloadAction<any> | {type: string}) => {
  store.dispatch(action)
}

/**
 * 获取token值
 * @returns {string}
 */
export const getHeaderAuthToken = () => {
  return localStorage.getItem(LOCALSTORAGE_X_AUTH_TOKEN)
}

/**
 * 获取token值
 * @returns {string}
 */
export const getLanguage = () => {
  return localStorage.getItem('umi_locale') || LOCALSTORAGE_LANGUAGE_ZH
}

// 退出登录
export const logout = () => {
  // TODO
  // const url = '/#/login'
  // clearLoginInfo()
  // window.location.href = url
}
