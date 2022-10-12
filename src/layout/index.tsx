import {ChangeEventHandler, useCallback} from 'react'
import {useTranslation} from 'react-i18next'
import {Link, Outlet} from 'react-router-dom'

const Root = () => {
  const {t, i18n} = useTranslation()

  const changeLanguage: ChangeEventHandler<HTMLSelectElement> = useCallback(e => {
    const value = e.target.value
    i18n.changeLanguage(value)
  }, [])

  return (
    <div>
      <header>
        heder
        {t('home.title')}
        <div>
          <label>语言切换</label>
          <select value={i18n.language} onChange={changeLanguage}>
            <option value="zh-CN">简</option>
            <option value="en-US">英</option>
          </select>
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
              <Link to={'/404'}>404</Link>
            </li>
          </ul>
        </div>
        <Outlet />
      </div>
      <footer>footer</footer>
    </div>
  )
}

export default Root
