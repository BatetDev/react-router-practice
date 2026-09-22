import { NavLink, Outlet } from 'react-router';

const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/profile/popeye'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Popeye's profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/profile/spinach'
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Spinach's profile
            </NavLink>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
};

export default Layout;
