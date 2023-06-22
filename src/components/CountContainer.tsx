import { useState } from 'react';
import styles from './CountContainer.module.css';
import CountDeposit from './CountDeposit';
import CountInputsWrapper from './CountInputsWrapper';
import CountInvest from './CountInvest';

const CountContainer = () => {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [month, setMonth] = useState('');

  return (
    <div className={styles.bg_wrapper}>
      <div className={styles.section_one}>
        <h2 className={styles.count_header}>Let&apos;s Count It!</h2>
        <CountInputsWrapper
          principal={principal}
          rate={rate}
          month={month}
          onPrincipalChange={setPrincipal}
          onRateChange={setRate}
          onMonthChange={setMonth}
        />
      </div>
      <div className={styles.section_two}>
        <CountDeposit />
        <CountInvest />
      </div>
    </div>
  );
};

export default CountContainer;
