import styles from './CountContainer.module.css';
import CountDeposit from './CountDeposit';
import CountInputsWrapper from './CountInputsWrapper';
import CountInvest from './CountInvest';

const CountContainer = () => {
  return (
    <div className={styles.bg_wrapper}>
      <div className={styles.section_one}>
        <h2 className={styles.count_header}>Let&apos;s Count It!</h2>
        <CountInputsWrapper />
      </div>
      <div className={styles.section_two}>
        <CountDeposit />
        <CountInvest />
      </div>
    </div>
  );
};

export default CountContainer;
