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
              <Link to={`/`}>
                Home
              </Link>
            </li>
            <li>
              <Link to={`/upload`}>
                Upload
              </Link>
            </li>
            <li>
              <Link to={`/history`}>
                History
              </Link>
            </li>
            <li>
              <Link to={`/about`}>
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
