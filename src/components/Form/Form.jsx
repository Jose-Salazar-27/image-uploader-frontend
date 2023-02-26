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

  const submitFile = async e => {
    e.preventDefault();

    const payload = new FormData();
    payload.append('my-file', files);

    console.log(payload, typeof payload);

    const options = {};

    const result = await fetch('http://localhost:8800/api/test', {
      method: 'POST',
      body: payload,
    });
    const json = await result.json();
    console.log(json);
  };

  return (
    <form className={styles.container} onSubmit={e => submitFile(e)}>
      <h2 className={styles.formTitle}>Upload your image</h2>
      <p className={styles.p}>File should be jpeg, png...</p>
      <DropZone files={files} setFiles={setFiles} />
      <p className={styles.text}>Or</p>
      <label htmlFor='button' className={styles.label}>
        Choose a file
      </label>
      <input type='file' id='button' className={styles.button} onChange={handleClick} />
      <button>submit</button>
    </form>
  );
}
