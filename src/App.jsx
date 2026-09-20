import { NavLink } from 'react-router';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Hello from the main page of the app!</h1>
      <p>Here are some examples of links to other pages</p>
      <nav>
        <ul>
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
    </div>
  );
};

export default App;
