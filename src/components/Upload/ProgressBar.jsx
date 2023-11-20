import styles from './ProgressBar.module.css';
const ProgressBar = ({ progress }) => {
  return (
    <>
      <div className={styles['center']}>Analyzing Video </div>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
          style={{ width: `${progress}%` }}
        ></div>
      </div>{' '}
    </>
  );
};
export default ProgressBar;
