import '@/common/variable.css'
import 'antd/dist/antd.css'
import './index.css'
import '@/i18n/config'
import 'antd/dist/antd.css'
// import 'moment/locale/zh-cn'
//  修复datapicker中文翻译异常
import 'moment/dist/locale/zh-cn'

// import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {Provider} from 'react-redux'
import {RouterProvider} from 'react-router-dom'

import router from '@/routes/index'
import store from '@/store'
console.log('main')

createRoot(document.getElementById('root') as HTMLElement).render(
  // <StrictMode>
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
  // </StrictMode>
)
