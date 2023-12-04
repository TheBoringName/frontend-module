import { useState } from 'react';
import Result from '../../components/Upload/Result';
import styles from './Upload.module.css';
import ProgressBar from '../../components/Upload/ProgressBar'
import axios from 'axios';
const Upload = () => {
  const [link, setLink] = useState('');
  const [file, setFile] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [display, setDisplay] = useState('upload-link');
  const [result,setResult] = useState();

  const config = {
    url: import.meta.env.VITE_BASE_URL,
    analize: import.meta.env.VITE_ANALIZE,
  };
  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleFileChange(e) {
    setFile(file, e.target.files[0]);
  }

  function getSource(){
    if (link.includes("youtube.com")) {
      return "YouTube";
    } else if (link.includes("tiktok.com")) {
      return "TikTok";
    } else if (link.includes("instagram.com")) {
      return "Instagram";
    } else {
      return "Local";
    }
  }
  function handleDisplayChange() {
    setDisplay(`${display === 'upload-link' ? 'upload-file' : 'upload-link'}`);
    setLink('')
    setFile();
  }

  async function displayAnalizeResult(){
    setIsLoading(true);
    setIsLoaded(false);
        const dataToSend = {
      url: link,
      source: getSource()
    };
    try {
      const response = await axios.post(`${config.url}/describe`, dataToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setResult(response.data);
      setIsLoading(false);
      setIsLoaded(true)
    } catch (error) {
      console.error('Błąd podczas przesyłania danych', error);
    }
  }


  return (
    <main className="padding-sides fix-height">
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
        <button className={`${styles.search} ${styles.btn}`} onClick={displayAnalizeResult} disabled={isLoading}>Analyze</button>
      </div>
      {isLoading? <ProgressBar/>: null}
      {isLoaded?<Result object={result}/>: null}
    </main>
  );
};

export default Upload;
