import {createBrowserRouter, RouteObject} from 'react-router-dom'

import App from '@/App'
import Layout from '@/layout/index'
import Page from '@/views/page'

import ErrorPage from './error_page'

// const Router = () => {
//   let element = useRoutes([
//     {
//       path: '/',
//       element: <div>Hellow World</div>
//     },
//     {
//       path: '/app',
//       element: <App />
//     }
//   ])

//   return element
// }

const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          element: <div>home</div>,
        },
        {
          path: 'app',
          element: <App />,
        },
        {
          path: 'page',
          element: <Page />,
        },
      ],
      // element: <div>Hellow World</div>
    },
    {
      path: '/login',
      element: <div>login</div>,
    },
  ],
  router = createBrowserRouter(routes)

export default router
