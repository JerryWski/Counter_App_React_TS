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
  const [errorDuration, setErrorDuration] = useState<string>('');

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
          errorDuration={errorDuration}
        />
      </div>
      <div className={styles.section_two}>
        <CountDeposit
          principal={principal}
          rate={rate}
          month={month}
          setErrorText={setErrorText}
          setErrorDuration={setErrorDuration}
        />
        <CountInvest
          principal={principal}
          rate={rate}
          month={month}
          setErrorText={setErrorText}
          setErrorDuration={setErrorDuration}
        />
        <p className={styles.footer}>
          * Income resulting from interest includes capital gains tax - 19%
        </p>
      </div>
    </div>
  );
};

export default CountContainer;
