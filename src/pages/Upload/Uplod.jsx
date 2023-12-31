import { useState, useRef } from 'react';
import Result from '../../components/Upload/Result';
import styles from './Upload.module.css';
import ProgressBar from '../../components/Upload/ProgressBar';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Upload = () => {
  const [link, setLink] = useState('');
  const [file, setFile] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [display, setDisplay] = useState('upload-link');
  const [result, setResult] = useState();
  const [base64data, setBase64data] = useState();
  const [isCoding, setIsCoding] = useState(false);
  const fileInputRef = useRef(null);
  const config = {
    url: import.meta.env.VITE_BASE_URL,
    analize: import.meta.env.VITE_ANALIZE,
  };
  function handleLinkChange(e) {
    setLink(e.target.value);
  }

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    getBase64(selectedFile);
  }

  function getSource() {
    if (link.includes('youtube.com')) {
      return 'YouTube';
    } else if (link.includes('tiktok.com')) {
      return 'TikTok';
    } else if (link.includes('instagram.com')) {
      return 'Instagram';
    } else {
      return 'Local';
    }
  }
  function clean() {
    setLink('');
    setFile();
  }

  const notify = () =>
    toast.error('Something went wrong', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'dark',
    });

  async function displayAnalizeResult() {
    setIsLoading(true);
    setIsLoaded(false);
    const src = getSource();
    const dataToSend = {
      url: src == 'Local' ? base64data : link,
      source: src,
    };
    try {
      const response = await axios.post(`${config.url}/describe`, dataToSend, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setResult(response.data);
      setIsLoading(false);
      setIsLoaded(true);
    } catch (error) {
      console.error('Błąd podczas przesyłania danych', error);
      notify();
      setIsLoading(false);
    }
  }
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };
  const getBase64 = (file) => {
    setIsCoding(true);
    let reader = new FileReader();
    reader.onloadend = function () {
      let base64data = reader.result.split(',')[1];
      setBase64data(base64data);
      setIsCoding(false);
    };
    reader.readAsDataURL(file);
  };
  return (
    <main className="padding-sides fix-height">
      <div className={styles['upload-box']}>
        <button
          className={`${styles.url} ${styles.btn}`}
          onClick={() => {
            setDisplay('upload-link');
            clean();
          }}
        >
          From url
        </button>
        <button
          className={`${styles.url} ${styles.btn}`}
          onClick={() => {
            setDisplay('upload-file');
            clean();
          }}
        >
          From device
        </button>
        <input
          type="text"
          className={`${styles['upload-link']} ${
            display === 'upload-file' ? styles.deactivate : ''
          }`}
          value={link}
          onChange={handleLinkChange}
          placeholder="Paste a link"
        />
        {display === 'upload-file' && (
          <>
            <label
              className={`${styles.pointer} ${styles['upload-link']}`}
              onClick={handleButtonClick}
            >
              Choose a file
            </label>
            <input
              type="file"
              className={styles['deactivate']}
              onChange={handleFileChange}
              ref={fileInputRef}
            />
          </>
        )}
        <button
          className={`${styles.search} ${styles.btn}`}
          onClick={displayAnalizeResult}
          disabled={isLoading || isCoding}
        >
          Analyze
        </button>
      </div>
      {isLoading ? <ProgressBar type="loading" /> : null}
      {isLoaded ? <Result object={result} /> : null}
      {isCoding ? <ProgressBar type="code" /> : null}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        className={styles.not}
      />
    </main>
  );
};

export default Upload;
