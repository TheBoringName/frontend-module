import styles from './Result.module.css';
import { Smiley, SmileyMeh, SmileySad } from '@phosphor-icons/react';
import responses from '../../../public/mocked_responses.json'
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
  function getRandomInt(max){
    return Math.floor(Math.random()* max)
  }
  const object = responses[getRandomInt(responses.length)]
  return (
    <>
      <div className={styles.result}>
        <label className={styles.lab}>
          Title:
        </label>
        <p className={styles.summary}>{object.video_id}</p>
        <label className={styles.lab}>
          Summary text:
        </label>
        <p className={styles.summary}>
          {object.summary_text}
        </p>
        <div className={styles['status-box']}>
          <p>Summary state: </p>
          <span>{status[object.summary_score].grade}</span>
          {status[object.summary_score].emoji}
        </div>
        <span className={styles.date}>Date: {date.toISOString()}</span>
      </div>
    </>
  );
};

export default Result;
