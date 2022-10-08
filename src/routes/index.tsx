import App from '@/App'
import Root from '@/layout/index'
import ErrorPage from './error_page'
import {createBrowserRouter, RouteObject} from 'react-router-dom'

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
      element: <Root />,
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
