import styles from './Result.module.css';
import { Smiley, SmileyMeh, SmileySad } from '@phosphor-icons/react';

const Result = () => {
  const date = new Date();
  const status = [
    {
      grade: 'positive',
      emoji: <Smiley size={60} color='#2f9e44'/>,
    },
    {
      grade: 'neutral',
      emoji: <SmileyMeh size={60} color='#868e96'/>,
    },
    {
      grade: 'negative',
      emoji: <SmileySad size={60} color='#e03131'/>,
    },
  ];

  return (
    <>
      <div className={styles.result}>
        <label className={styles.lab}>
          Summary text:
        </label>
        <p className={styles.summary}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A dolor
          atque aliquid delectus dolores quos iure laudantium soluta. Veniam
          iure non fugiat corrupti, architecto dolor repellat voluptates ut odio
          voluptatibus.
        </p>
        <div className={styles['status-box']}>
          <p>Summary state: </p>
          <span>{status[0].grade}</span>
          {status[0].emoji}
        </div>
        <span className={styles.date}>Date: {date.toISOString()}</span>
      </div>
    </>
  );
};

export default Result;
