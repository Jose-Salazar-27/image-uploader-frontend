import styles from './styles.module.css';

export function Container({ inputs }) {
  return <div className={styles.container}>{inputs}</div>;
}
