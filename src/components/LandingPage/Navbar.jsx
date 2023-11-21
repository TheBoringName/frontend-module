import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <span className={styles.logo}>TheBoringName</span>
      <nav>
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
    </header>
  );
};

export default Navbar;
