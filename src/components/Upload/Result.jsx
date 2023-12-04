import styles from './Result.module.css';
import { Smiley, SmileyMeh, SmileySad } from '@phosphor-icons/react';
const Result = ({object}) => {
  const status = [
    {
      grade: 'positive',
      emoji: <Smiley size={60} color="#2f9e44" />,
    },
    {
      grade: 'neutral',
      emoji: <SmileyMeh size={60} color="#868e96" />,
    },
    {
      grade: 'negative',
      emoji: <SmileySad size={60} color="#e03131" />,
    },
  ];
  function getRandomState() {
    return Math.floor(Math.random() * 3);
  }
  return (
    <section className={styles.result}>
      <label className={styles.lab}>Title:</label>
      <p className={styles.title}>{object.title}</p>
      <label className={styles.lab}>Source:</label>
      <p className={styles.title}>{object.source} ({object.url})</p>
      <label className={styles.lab}>Summary text:</label>
      <p className={styles.summary}>{object.analysis}</p>
      <div className={styles['status-box']}>
        <p className={styles['status-box-text']}>Summary state: </p>
        <span>{status[getRandomState()].grade}</span>
        {status[getRandomState()].emoji}
      </div>
      <span className={styles.date}>Date: {object.analysis_date}</span>
    </section>
  );
};

export default Result;
