import styles from './styles.module.css';
import { DropZone } from '../atomics/DropZone';
import { handleSelectFile } from './file-handlers';

export function Form({ loading, setLoading, files, setFiles }) {
  return (
    <form className={styles.container}>
      <h2 className={styles.formTitle}>Upload your image</h2>
      <p className={styles.p}>File should be jpeg, png...</p>\
      <DropZone files={files} setFiles={setFiles} setLoading={setLoading} />
      <p className={styles.text}>Or</p>
      <label htmlFor='button' className={styles.label}>
        Choose a file
      </label>
      <input type='file' id='button' className={styles.button} onChange={e => handleSelectFile(e, setFiles, setLoading)} />
    </form>
  );
}
