import styles from './CountContainer.module.css';
import CountInputsWrapper from './CountInputsWrapper';

const CountContainer = () => {
  return (
    <div className={styles.bg_wrapper}>
      <h2 className={styles.count_header}>Let&apos;s Count It!</h2>
      <CountInputsWrapper />
    </div>
  );
};

export default CountContainer;
