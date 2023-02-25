import { useState } from 'react';
import styles from './styles.module.css';
import { DropZone } from '../atomics/DropZone';

export function Form() {
  const [files, setFiles] = useState(null);

  const handleClick = e => {
    const file = e.target.files;
    console.log(file);
    setFiles(file[0]);
  };

  return (
    <form className={styles.container}>
      <h2 className={styles.formTitle}>Upload your image</h2>
      <p className={styles.p}>File should be jpeg, png...</p>
      <DropZone files={files} setFiles={setFiles} />
      <p className={styles.text}>Or</p>
      <label htmlFor='button' className={styles.label}>
        Choose a file
      </label>
      <input type='file' id='button' className={styles.button} onChange={handleClick} />
    </form>
  );
}
