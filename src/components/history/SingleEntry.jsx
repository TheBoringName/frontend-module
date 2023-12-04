import styles from './SingleEntry.module.css';
import arrow from '../../../public/dropdown.png';
import arrowUp from '../../../public/dropup.png';
import { useState } from 'react';
import { Smiley, SmileyMeh, SmileySad } from '@phosphor-icons/react';

const SingleEntry = ({ object, emoji}) => {
  const [isExtended, setIsExtended] = useState(false);

  function dropDown() {
    setIsExtended((prevValue) => !prevValue);
  }
  return (
    <aside>
      <figure className={styles.main}>
        <p className={styles.title}>{object.title}</p>
        <p className={styles.arrow}>
        {emoji}
          <img
            src={!isExtended ? arrow : arrowUp}
            alt="scroll"
            onClick={dropDown}
          />
        </p>
      </figure>
      {isExtended ? (
        <div className={styles.description}>
          {object.analysis}
          <p className={styles.date}>{object.analysis_date}</p>
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
