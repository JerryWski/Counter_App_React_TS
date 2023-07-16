import { useState } from 'react';
import styles from './CountContainer.module.css';
import { CountDeposit } from './CountDeposit';
import { InputsWrapper } from './InputsWrapper';
import { CountInvest } from './CountInvest';

const CountContainer = () => {
  const [principal, setPrincipal] = useState<number | string>('');
  const [rate, setRate] = useState<number | string>('');
  const [month, setMonth] = useState<number | string>('');
  const [errorText, setErrorText] = useState<string>('');
  const [errorDuration, setErrorDuration] = useState<string>('');

  return (
    <div className={styles.bg_wrapper}>
      <div className={styles.section_one}>
        <h2 className={styles.count_header}>Let&apos;s Count It!</h2>
        <InputsWrapper
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
