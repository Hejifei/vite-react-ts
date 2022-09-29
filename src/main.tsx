import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from 'react-router-dom'
import '@/common/variable.css'
import './index.css'
import router from '@/routes/index'

createRoot(document.getElementById('root') as HTMLElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
