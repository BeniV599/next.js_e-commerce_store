import styles from './loading.module.scss';

export default function RootLoading() {
  return (
    <div className={styles.loadingBox}>
      <div className={styles.loading}>Loading in progress...</div>
    </div>
  );
}
