import React from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../components/LandingPage/Navbar';

const Root = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </React.Fragment>
  );
};

export default Root;
