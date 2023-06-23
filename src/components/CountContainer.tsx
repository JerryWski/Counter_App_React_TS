import { useState } from 'react';
import styles from './CountContainer.module.css';
import CountDeposit from './CountDeposit';
import CountInputsWrapper from './CountInputsWrapper';
import CountInvest from './CountInvest';

const CountContainer = () => {
  const [principal, setPrincipal] = useState<number>(0);
  const [rate, setRate] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [errorText, setErrorText] = useState<string>('');

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
          errorText={errorText}
        />
      </div>
      <div className={styles.section_two}>
        <CountDeposit
          principal={principal}
          rate={rate}
          month={month}
          setErrorText={setErrorText}
        />
        <CountInvest principal={principal} rate={rate} month={month} />
      </div>
    </div>
  );
};

export default CountContainer;
