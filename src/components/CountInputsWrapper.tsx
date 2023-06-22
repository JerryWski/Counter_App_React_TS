/* eslint-disable react/self-closing-comp */
import { useState } from 'react';
import styles from './CountInputsWrapper.module.css';

const CountInputsWrapper = ({ principal, rate, month, onPrincipalChange, onRateChange, onMonthChange }) => {

  const handlePrincipalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onPrincipalChange(e.target.value);
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onRateChange(e.target.value);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onMonthChange(e.target.value);
  };

  return (
    <div className={styles.inputs_wrapper}>
      <span className={styles.error_text__amount}>Error text amount</span>
      <div className={styles.input_container}>
        <input
          required
          type="number"
          value={principal}
          onChange={handlePrincipalChange}
        />
        <span>Starting amount</span>
        <i></i>
      </div>
      <div className={styles.input_container}>
        <input
          required
          type="number"
          onChange={handleRateChange}
          value={rate}
        />
        <span>Annunal rate(%)</span>
        <i></i>
      </div>
      <div className={styles.input_container}>
        <input
          required
          type="number"
          onChange={handleMonthChange}
          value={month}
        />
        <span>Duration*</span>
        <i></i>
      </div>
      <span className={styles.error_text}>error text</span>
      <p className={styles.duration_explain}>
        * In duration please select numbers from 1 to 12
      </p>
    </div>
  );
};

export default CountInputsWrapper;
