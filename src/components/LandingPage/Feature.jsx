import styles from './Feature.module.css';

const Feature = ({ title, desc, icon }) => {
  return (
    <figure className={styles.box}>
      <div className={styles['title-box']}>
        <span className={styles.title}>{title}</span>
        {icon}
      </div>
      <p className={styles.desc}>{desc}</p>
    </figure>
  );
};

export default Feature;
