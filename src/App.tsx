import reactLogo from './assets/react.svg'
import './App.css'
import {useCallback, useState, useEffect} from 'react'
import type {FC} from 'react'
import {connect} from 'react-redux'
import styles from './App.module.less'
import {decrement, increment, incrementByAmount} from '@/models/baseSlice'
import {useAppSelector, useAppDispatch} from '@/hooks/redux_hook'
import {valueSelector, valueSelector2} from '@/models/baseSlice/selector'
import {RootState} from '@/store'
import {dispatchAction} from '@/utils'

interface IProps {
  value: number
}

const App: FC<IProps> = ({value}) => {
  const [count, setCount] = useState(0)
  const reduxCount = useAppSelector(state => state.base.value)
  const reduxCount2 = useAppSelector(valueSelector)
  const dispatch = useAppDispatch()

  console.log({
    value,
    env: import.meta.env,
  })

  useEffect(() => {
    console.log('init')
  }, [])

  const handleIncrement = useCallback(() => {
    // 方式1
    // dispatch(increment())
    // 方式2
    dispatchAction({
      type: increment.type,
    })
    // 方式3
    // dispatch({
    //   type: 'base/increment',
    // })
  }, [])

  const handleDecrement = useCallback(() => {
    dispatch(decrement())
  }, [])

  const handleValue100 = useCallback(() => {
    // dispatch(incrementByAmount(100))
    dispatchAction({
      type: incrementByAmount.type,
      // type: 'base/incrementByAmount',
      payload: 100,
    })
  }, [])

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
        <button aria-label="Increment value" onClick={handleIncrement}>
          Increment
        </button>
        <p>value: {value}</p>--
        <p>reduxCount: {reduxCount}</p>--
        <p>reduxCount2: {reduxCount2}</p>
        <button aria-label="Decrement value" onClick={handleDecrement}>
          Decrement
        </button>
        <button aria-label="Decrement value" onClick={handleValue100}>
          +100
        </button>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    value: valueSelector2(state),
  }
}

export default connect(mapStateToProps)(App)
