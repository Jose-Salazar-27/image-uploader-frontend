import { useState } from 'react';
import styles from './styles.module.css';
import { DropZone } from '../atomics/DropZone';
import { handleSelectFile, submitFile } from './file-handlers';

export function Form({ loading, setLoading }) {
  const [files, setFiles] = useState(null);

  return (
    <form className={styles.container} onSubmit={e => submitFile(e, files)}>
      <h2 className={styles.formTitle}>Upload your image</h2>
      <p className={styles.p}>File should be jpeg, png...</p>
      <DropZone files={files} setFiles={setFiles} setLoading={setLoading} />
      <p className={styles.text}>Or</p>
      <label htmlFor='button' className={styles.label}>
        Choose a file
      </label>
      <input type='file' id='button' className={styles.button} onChange={e => handleSelectFile(e, setFiles)} />
      <button>submit</button>
    </form>
  );
}
