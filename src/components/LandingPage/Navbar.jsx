import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles['box-color']}>
      <header className={styles.header}>
        <span className={styles.logo}>TheBoringName</span>
        <nav>
          <ul className={styles['links-container']}>
            <li>
              <Link to={`/`} className={styles['nav-link']}>
                Home
              </Link>
            </li>
            <li>
              <Link to={`/upload`} className={styles['nav-link']}>
                Upload
              </Link>
            </li>
            <li>
              <Link to={`/history`} className={styles['nav-link']}>
                History
              </Link>
            </li>
            <li>
              <Link to={`/about`} className={styles['nav-link']}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
