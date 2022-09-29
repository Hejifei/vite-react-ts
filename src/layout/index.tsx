import {Outlet, Link} from 'react-router-dom'

const Root = () => {
  return (
    <div>
      <header>heder</header>
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
