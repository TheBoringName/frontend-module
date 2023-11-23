// import { ReactSVG } from 'react-svg';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={`${styles['hero-box']} padding-sides`}>
      <div className={`${styles['grid-hero']} ${styles['grid--2-col']}`}>
        <aside>
          <h2 className={styles.project}>What do they mean?</h2>
          <p className={styles['hero-box-title']}>
            {' '}
            Your Ultimate Audio and Video Analysis App
          </p>
          <p className={styles['hero-box-text']}>
            WhatTheyMean is an innovative and versatile web application designed
            for users seeking to delve into the content of audio and
            audio-visual files to grasp their context more fully.
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
