import styles from './styles.module.css';
import dropZoneImage from '../../assets/image.svg';

export function Form() {
  return (
    <form className={styles.container}>
      <h2 className={styles.formTitle}>Upload your image</h2>
      <p className={styles.p}>File should be jpeg, png...</p>
      <div className={styles.dropZone}>
        <div className={styles.imageContainer}>
          <img src={dropZoneImage} className={styles.dropZoneImage} alt='' />
          <p className={styles.text}>Drag an Drop your image here</p>
        </div>
      </div>
      <p className={styles.text}>Or</p>
      <label htmlFor='button' className={styles.label}>
        Choose a file
      </label>
      <input type='file' id='button' className={styles.button} />
    </form>
  );
}
