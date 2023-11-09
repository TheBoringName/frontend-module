import { Outlet } from 'react-router-dom';

import Navbar from '../components/LandingPage/Navbar';

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Root;
