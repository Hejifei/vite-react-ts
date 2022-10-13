import {ConfigProvider, DatePicker} from 'antd'
import {get} from 'lodash'
import moment from 'moment'
import {ChangeEventHandler, useCallback, useMemo} from 'react'
import {useTranslation} from 'react-i18next'
import {Link, Outlet} from 'react-router-dom'

import {i18nConfigProviderMap, LOCALSTORAGE_LANGUAGE_MAP} from '@/common/language'

moment.locale('zh-cn')

const Root = () => {
  const {t, i18n} = useTranslation()

  const changeLanguage: ChangeEventHandler<HTMLSelectElement> = useCallback(e => {
    const value = e.target.value
    i18n.changeLanguage(value)
    const momentLocale = get(i18nConfigProviderMap, [value, 'momentLocale']) || 'en'
    moment.locale(momentLocale)
  }, [])

  const language = i18n.language
  const locale = useMemo(() => i18nConfigProviderMap[language], [language])

  return (
    <ConfigProvider locale={locale}>
      <div>
        <header>
          heder
          {t('home.title')}
          <div>
            <label>语言切换</label>
            <select value={i18n.language} onChange={changeLanguage}>
              {Object.values(LOCALSTORAGE_LANGUAGE_MAP).map(item => {
                return (
                  <option key={item.language} value={item.language}>
                    {item.name}
                  </option>
                )
              })}
            </select>
            <DatePicker />
          </div>
        </header>
        <div>
          <div>
            <ul>
              <li>
                <Link to={'/'}>home</Link>
              </li>
              <li>
                <Link to={'/app'}>app</Link>
              </li>
              <li>
                <Link to={'/login'}>login</Link>
              </li>
              <li>
                <Link to={'/page'}>page</Link>
              </li>
              <li>
                <Link to={'/404'}>404</Link>
              </li>
            </ul>
          </div>
          <Outlet />
        </div>
        <footer>footer</footer>
      </div>
    </ConfigProvider>
  )
}

export default Root
