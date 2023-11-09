import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/LandingPage/Navbar';

const Root = () => {
  const location = useLocation();
  return (
    <>
      <Navbar route={location.pathname} />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
