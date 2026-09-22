import App from './App';
import Layout from './components/Layout';
import Profile from './components/Profile';
import ErrorPage from './components/ErrorPage';

const routes = [
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: 'profile/:name',
        element: <Profile />,
      },
    ],
  },
];

export default routes;
