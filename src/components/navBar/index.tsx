import cn from 'classnames'
import {type FC, useContext} from 'react'

import {LOCALSTORAGE_THEME_DARK_VALUE, LOCALSTORAGE_THEME_LIGHT_VALUE} from '@/common'
import {ThemeContext} from '@/theme/context'

import styles from './index.module.less'

const NavBar: FC = () => {
  const {mode, switchMode} = useContext(ThemeContext)

  return (
    <div className={cn(styles.container, styles[mode])}>
      <div className={styles.relativeWrap}>
        <div
          className={styles.themeSwitch}
          onClick={() =>
            switchMode(
              mode === LOCALSTORAGE_THEME_DARK_VALUE
                ? LOCALSTORAGE_THEME_LIGHT_VALUE
                : LOCALSTORAGE_THEME_DARK_VALUE
            )
          }
        >
          <img
            src={
              mode === 'dark'
                ? 'https://assets.blocksec.com/image/1664446020484-3.svg'
                : 'https://assets.blocksec.com/image/1664446020484-2.svg'
            }
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default NavBar
