import { ReactSVG } from 'react-svg';
import styles from './Card.module.css';

const Card = ({ info }) => {
  console.log(info.logo);
  return (
    <figure>
      <div className={styles['social-box']}>
        <span className="mb-2">{info.brandName}</span>
        <ReactSVG src={info.logo} />
        <ul className="mt-5">
          {info.list.map((item) => (
            <li className={styles['desc-box']} key={item.key}>{item.icon}{item.desc}</li>
          ))}
        </ul>
      </div>
    </figure>
  );
};

export default Card;
