import styles from './styles.module.css';
import checkIcon from '../../assets/check-icon.svg';
import { useLocation } from 'react-router-dom';

export function ImagePreview() {
  const {
    state: {
      json: { payload },
    },
  } = useLocation();
  console.log(payload);

  const clipboardHandler = value => {
    navigator.clipboard.writeText(value);
  };

  return (
    <>
      {!payload.url ? (
        <h1>Loading...</h1>
      ) : (
        <div className={styles.container}>
          <div className={styles.checkIconContainer}>
            <img src={checkIcon} alt='' />
          </div>
          <h2 className={styles.title}>Uploaded Successfully!</h2>
          <div className={styles.imageContainer}>
            <img className={styles.image} src={payload?.url} alt='' />
          </div>

          <div className={styles.urlTextBox}>
            <p>{payload.url}</p>
            <label className={styles.label} htmlFor='copyButton'>
              Copy Link
            </label>
            <input className={styles.button} type='button' id='copyButton' onClick={() => clipboardHandler(payload.url)} />
          </div>
        </div>
      )}
    </>
  );
}
