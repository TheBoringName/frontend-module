import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { List, X } from '@phosphor-icons/react';

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);
  const open = styles['nav-open'];

  function toggleMenu() {
    setMobile(!isMobile);
    console.log(isMobile)
  }

  return (
    <header className={styles.header}>
      <span className={styles.logo}>TheBoringName</span>
      <nav className={`${styles['main-nav']} ${isMobile ? open : ''}`}>
        <ul className={styles['links-container']}>
          <li>
            <NavLink to={`/`} className={styles['nav-link']}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={`/upload`} className={styles['nav-link']}>
              Upload
            </NavLink>
          </li>
          <li>
            <NavLink to={`/history`} className={styles['nav-link']}>
              History
            </NavLink>
          </li>
          <li>
            <NavLink to={`/about`} className={styles['nav-link']}>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
      <button className={styles['btn-mobile-nav']} onClick={toggleMenu}>
        <List
          size={36}
          data-name="open-menu"
          className={styles['icon-mobile-nav']}
        />
        <X
          size={36}
          data-name="close-menu"
          className={styles['icon-mobile-nav']}
        />
      </button>
    </header>
  );
};

export default Navbar;
