import Root from './pages/Root.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import ErrorPage from './pages/404/ErrorPage.jsx';
import Upload from './pages/Upload/Uplod.jsx';
import History from './pages/History/History.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import styles from './App.module.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
      },
      {
        path: 'upload',
        element: <Upload />,
      },
      {
        path: 'history',
        element: <History />,
      },
    ],
  },
]);

const App = () => {
  console.log(import.meta.env.VITE_API);

  return <RouterProvider router={router} />;
};

export default App;
