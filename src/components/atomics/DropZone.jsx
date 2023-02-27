import styles from './styles.module.css';
import dropZoneImage from '../../assets/image.svg';
import { dragAndDrop, handleDrop } from './drop-handling';

export function DropZone({ files, setFiles, setLoading }) {
  return (
    <div id='DROPZONE' className={styles.dropZone} onDragOver={e => dragAndDrop(e)} onDrop={e => handleDrop(e, setFiles)}>
      <div className={styles.imageContainer}>
        <img src={dropZoneImage} className={styles.dropZoneImage} alt='' />
        <p className={styles.text}>Drag an Drop your image here</p>
      </div>
    </div>
  );
}
