import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { List, X } from '@phosphor-icons/react';

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);

  function toggleMenu() {
    setMobile(!isMobile);
  }

  return (
    <header className={`header ${isMobile ? 'nav-open' : ''}`}>
      <span className="logo">TheBoringName</span>
      <nav className="main-nav">
        <ul className="links-container">
          <li>
            <NavLink to={`/`} className="nav-link" onClick={toggleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/upload`} className="nav-link" onClick={toggleMenu}>
              Upload
            </NavLink>
          </li>
          <li>
            <NavLink to={`/history`} className="nav-link" onClick={toggleMenu}>
              History
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className="btn-mobile-nav" onClick={toggleMenu}>
        <List size={36} data-name="open-menu" className="icon-mobile-nav" />
        <X size={36} data-name="close-menu" className="icon-mobile-nav" />
      </button>
    </header>
  );
};

export default Navbar;
