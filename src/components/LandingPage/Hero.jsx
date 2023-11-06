import { ReactSVG } from 'react-svg';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles['hero-box']}>
      <div className="row">
        <div className="col-8">
          <h2 className={styles.project}>What do they mean?</h2>
          <p className="title">Lorem ipsum dolor!</p>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi minus
            voluptatibus similique id aspernatur quia, incidunt officia ducimus
            reiciendis libero veniam consequuntur doloremque quidem illo
            quibusdam sunt magnam commodi. Nemo.
          </p>
        </div>
        <div className="col d-flex justify-content-end">
          <ReactSVG src="../../../public/hero.svg" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
