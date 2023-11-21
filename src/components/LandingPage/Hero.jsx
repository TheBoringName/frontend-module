// import { ReactSVG } from 'react-svg';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`${styles['hero-box']} padding-sides`}>
      <div className={`${styles['grid-hero']} ${styles['grid--2-col']}`}>
        <aside>
          <h2 className={styles.project}>What do they mean?</h2>
          <p className={styles['hero-box-title']}>Lorem ipsum dolor!</p>
          <p className={styles['hero-box-text']}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi minus
            voluptatibus similique id aspernatur quia,
          </p>
        </aside>
        <figure className={styles['hero-figure']}>
          <img src="/hero.svg" className={styles['hero-img']} />
        </figure>
      </div>
    </section>
  );
};

export default Hero;
