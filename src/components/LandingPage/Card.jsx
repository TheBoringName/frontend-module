import { ReactSVG } from 'react-svg';
import styles from './Card.module.css';

const Card = ({ info }) => {
  console.log(info.logo);
  return (
    <figure className={styles.border}>
      <div className={styles['social-box']}>
        <span className={styles.brand}>{info.brandName}</span>
        <ReactSVG src={info.logo} />
        <ul className={styles['social-box-list']}>
          {info.list.map((item) => (
            <li className={styles['desc-box']} key={item.key}>{item.icon}{item.desc}</li>
          ))}
        </ul>
      </div>
    </figure>
  );
};

export default Card;
