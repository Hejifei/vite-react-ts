import reactLogo from './assets/react.svg'
import './App.css'
import {useState} from 'react'
import type {FC} from 'react'
import {connect} from 'react-redux'
import lodash from 'lodash'
import styles from './App.module.less'
import {decrement, increment} from '@/models/baseSlice'
import {useAppSelector, useAppDispatch} from '@/hooks/redux_hook'
import {valueSelector, valueSelector2} from '@/models/baseSlice/selector'
import {RootState} from '@/store'
console.log({lodash})

interface IProps {
  value: number
}
const App: FC<IProps> = ({value}) => {
  console.log({
    value
  })
  const [count, setCount] = useState(0)
  const reduxCount = useAppSelector(state => state.base.value)
  const reduxCount2 = useAppSelector(valueSelector)
  const dispatch = useAppDispatch()

  console.log({
    env: import.meta.env
  })

  return (
    <div className="App">
      <div className={styles.wrapper}>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React xx</h1>
      <div className="card">
        <button onClick={() => setCount(val => val + 1)}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <button aria-label="Increment value" onClick={() => dispatch(increment())}>
          Increment
        </button>
        <p>value: {value}</p>--
        <p>reduxCount: {reduxCount}</p>--
        <p>reduxCount2: {reduxCount2}</p>
        <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
          Decrement
        </button>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    value: valueSelector2(state)
  }
}

export default connect(mapStateToProps)(App)
