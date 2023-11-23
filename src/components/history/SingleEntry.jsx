import styles from './SingleEntry.module.css';
import arrow from '../../../public/dropdown.png';
import arrowUp from '../../../public/dropup.png';
import { useState } from 'react';

const SingleEntry = ({ object, status }) => {
  const [isExtended, setIsExtended] = useState(false);
  function dropDown() {
    setIsExtended((prevValue) => !prevValue);
  }
  return (
    <aside>
      <figure className={styles.main}>
        <p className={styles.title}>{object.video_id}</p>
        <p className={styles.arrow}>
          <img
            src={!isExtended ? arrow : arrowUp}
            alt="scroll"
            onClick={dropDown}
          />
        </p>
      </figure>
      {isExtended ? (
        <div className={styles.description}>
          {object.summary_text}
          <p className={styles.date}>{object.timestamp_generated}</p>
          <div className={styles.mood}>
            <p>{status.grade}</p>
            <p>{status.emoji}</p>
          </div>
        </div>
      ) : null}
    </aside>
  );
};
export default SingleEntry;
