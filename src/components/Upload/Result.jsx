import styles from './Result.module.css';
import { Smiley, SmileyMeh, SmileySad } from '@phosphor-icons/react';
const Result = ({object}) => {
const emojis={
  positive: <Smiley size={60} color="#2f9e44" />,
  negative: <SmileySad size={60} color="#e03131" />,
  neutral: <SmileyMeh size={60} color="#868e96" />
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
        <span>{object.sentiment}</span>
        {emojis[object.sentiment]}
      </div>
      <span className={styles.date}>Date: {object.analysis_date}</span>
    </section>
  );
};

export default Result;
