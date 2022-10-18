import {PayloadAction} from '@reduxjs/toolkit'

import {
  LOCALSTORAGE_THEME_DARK_VALUE,
  LOCALSTORAGE_THEME_LIGHT_VALUE,
  LOCALSTORAGE_THEME_MODE,
  LOCALSTORAGE_X_AUTH_TOKEN,
} from '@/common'
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

// 获取初始主题模式
export const getBrowserThemeMode = () => {
  // 匹配浏览器的主题
  return window.matchMedia('(prefers-color-scheme: light)').matches
    ? LOCALSTORAGE_THEME_LIGHT_VALUE
    : LOCALSTORAGE_THEME_DARK_VALUE
}

/**
 * 获取当前选中主题模式/浏览器当前主题模式
 * @returns string
 */
export const getStorageThemeMode = () => {
  const localThemeMode = localStorage.getItem(LOCALSTORAGE_THEME_MODE)
  return localThemeMode || getBrowserThemeMode()
}

/**
 * 主题保存到浏览器
 * @param value 'light'/'dark'
 */
export const setStorageThemeMode = (value: string) => {
  localStorage.setItem(LOCALSTORAGE_THEME_MODE, value)
}
