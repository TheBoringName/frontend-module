import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles['box-color']}>
      <header className={styles.header}>
        <span className={styles.logo}>TheBoringName</span>
        <nav>
          <ul className={styles['links-container']}>
            <li>
              <a href="" className={styles['nav-link']}>
                Home
              </a>
            </li>
            <li>
              <a href="" className={styles['nav-link']}>
                Upload
              </a>
            </li>
            <li>
              <a href="" className={styles['nav-link']}>
                History
              </a>
            </li>
            <li>
              <a href="" className={styles['nav-link']}>
                About
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
