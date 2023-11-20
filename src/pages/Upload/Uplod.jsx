import { useState } from 'react';
import Result from '../../components/Upload/Result';
import styles from './Upload.module.css';
import ProgressBar from '../../components/Upload/ProgressBar'
const Upload = () => {
  const [link, setLink] = useState('');
  const [file, setFile] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [progress,setProgress] = useState(0);
  const [display, setDisplay] = useState('upload-link');

  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleFileChange(e) {
    setFile(file, e.target.files[0]);
  }

  function handleDisplayChange() {
    setDisplay(`${display === 'upload-link' ? 'upload-file' : 'upload-link'}`);
  }

  function analyze(){
    setIsLoaded(false);
    setIsLoading(true);
    const interval = setInterval(()=>{
        setProgress((prevProgress)=>{
            if(prevProgress<100)
            return prevProgress+1
        else {
            clearInterval(interval);
            setIsLoaded(true);
            setIsLoading(false);
            return 0; }
        });
    },30)
  }

  return (
    <>
      <div className={styles['upload-box']}>
        <button
          className={`${styles.url} ${styles.btn}`}
          onClick={handleDisplayChange}
        >
          From url
        </button>
        <button
          className={`${styles.url} ${styles.btn}`}
          onClick={handleDisplayChange}
        >
          From device
        </button>
        <input
          type="text"
          className={`${styles['upload-link']} ${display === 'upload-file' ? styles.deactivate : ''}`}
          value={link}
          onChange={handleLinkChange}
          placeholder="Paste a link"
        />
        <input
          type="file"
          className={`${styles['upload-file']} ${display === 'upload-link' ? styles.deactivate : ''}`}
          value={file}
          onChange={handleFileChange}
        />
        <button className={`${styles.search} ${styles.btn}`} onClick={analyze}>Analyze</button>
      </div>
      {isLoading ? <ProgressBar progress={progress}/>:null}
      {isLoaded?<Result />: null}
    </>
  );
};

export default Upload;
