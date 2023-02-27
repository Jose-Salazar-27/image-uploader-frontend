import styles from './styles.module.css';

export function Loader() {
  return (
    <div className={styles.Loader}>
      <h2 className={styles.title}>Uploading...</h2>
      <div className={styles.spinner}>
        <div className={styles.spinnerBar}></div>
      </div>
    </div>
  );
}
