import { useState } from 'react';
import styles from './Upload.module.css';

const Upload = () => {
  const [link, setLink] = useState('');
  const [file, setFile] = useState();
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
        <button className={`${styles.search} ${styles.btn}`}>Analyze</button>
      </div>
    </>
  );
};

export default Upload;
