import styles from './ProgressBar.module.css';
import Loader from "react-spinners/PulseLoader";
const ProgressBar = () => {
  return (
      <div className={styles['center']}>
      <Loader
  color="#91a7ff"
  margin={10}
  size={15}
/>
<p>Analyzing Video </p>
<p>It may takes up to a few minutes</p>
      </div>
  );
};
export default ProgressBar;
