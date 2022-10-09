import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import '@/common/variable.css'
import './index.css'
import router from '@/routes/index'
import store from '@/store'
import {Provider} from 'react-redux'
console.log('main')

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
)
