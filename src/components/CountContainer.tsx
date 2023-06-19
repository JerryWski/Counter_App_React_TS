import styles from './CountContainer.module.css';

const CountContainer = () => {
  return (
    <div className={styles.bg_wrapper}>
      <h2 className={styles.count_header}>Let&apos;s Count It!</h2>
    </div>
  );
};

export default CountContainer;
