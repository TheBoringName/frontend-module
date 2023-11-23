import { Outlet } from 'react-router-dom';
import Navbar from '../components/LandingPage/Navbar';

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="page-box">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
