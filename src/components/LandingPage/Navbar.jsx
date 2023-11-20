import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ route }) => {
  const setIsSelected = () => {
    const links = [...document.querySelectorAll('a')];
    const active = links.filter((link) => link.href.includes(route));
    active.classList === `${styles['#active']}`;
    console.log(active);
  };

  useEffect(() => {
    setIsSelected();
  });

  return (
    <div className={styles['box-color']}>
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
    </div>
  );
};

export default Navbar;
