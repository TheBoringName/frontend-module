import styles from './SingleEntry.module.css';
// import arrow from '../../../public/dropdown.png';
// import arrowUp from '../../../public/dropup.png';
import { useState } from 'react';
import {
  Smiley,
  SmileyMeh,
  SmileySad,
  CaretCircleDown,
  CaretCircleUp,
} from '@phosphor-icons/react';
const emojis = {
  positive: <Smiley color="#2f9e44" />,
  negative: <SmileySad color="#e03131" />,
  neutral: <SmileyMeh color="#868e96" />,
};

const SingleEntry = ({ object }) => {
  const [isExtended, setIsExtended] = useState(false);

  function dropDown() {
    setIsExtended((prevValue) => !prevValue);
  }
  return (
    <aside>
      <figure className={styles.main}>
        <p className={styles.title}>{object.title}</p>
        <div className={styles.arrow}>
          <div onClick={dropDown}>
          {emojis[object.sentiment]}
            {!isExtended ? <CaretCircleDown /> : <CaretCircleUp />}
          </div>
        </div>
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
