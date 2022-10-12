export const LOCALSTORAGE_USER_INFO = 'USER_INFO'
export const LOCALSTORAGE_X_AUTH_TOKEN = 'X_AUTH_TOKEN'

// 语言
export const LOCALSTORAGE_LANGUAGE_ZH = 'zh_CN'
export const LOCALSTORAGE_LANGUAGE_EN = 'en_US'
export const LOCALSTORAGE_LANGUAGE_MAP: Record<string, ILocalstorageLanguageItem> = {
  [LOCALSTORAGE_LANGUAGE_ZH]: {name: '中文', key: 'zh', language: LOCALSTORAGE_LANGUAGE_ZH},
  [LOCALSTORAGE_LANGUAGE_EN]: {name: 'English', key: 'en', language: LOCALSTORAGE_LANGUAGE_EN},
}
