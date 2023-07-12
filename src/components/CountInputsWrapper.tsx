/* eslint-disable react/self-closing-comp */
import styles from './CountInputsWrapper.module.css';
import InputsPropTypes from '../types/PropTypes';
import { InputCalcProps } from '../types/Types';

interface CountInputsWrapperProps extends InputCalcProps {
  errorText: string;
  errorDuration: string;
}

const CountInputsWrapper: React.FC<CountInputsWrapperProps> = ({
  principal,
  rate,
  month,
  onPrincipalChange,
  onRateChange,
  onMonthChange,
  errorText,
  errorDuration,
}) => {
  const handlePrincipalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const principalValue = parseFloat(e.target.value);
    onPrincipalChange(principalValue);
    // check for fixing console error with input value
    if (Number.isNaN(principalValue)) {
      onPrincipalChange('');
    } else {
      onPrincipalChange(principalValue);
    }
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rateValue = parseFloat(e.target.value);
    onRateChange(rateValue);
    if (Number.isNaN(rateValue)) {
      onRateChange('');
    } else {
      onRateChange(rateValue);
    }
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const monthValue = parseFloat(e.target.value);
    onMonthChange(monthValue);
    if (Number.isNaN(monthValue)) {
      onMonthChange('');
    } else {
      onMonthChange(monthValue);
    }
  };

  return (
    <div className={styles.inputs_wrapper}>
      {errorText && (
        <span className={styles.error_text__amount}>{errorText}</span>
      )}
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
          // type="number"
          onChange={handleMonthChange}
          value={month}
        />
        <span>Duration*</span>
        <i></i>
      </div>
      <span className={styles.error_text}>{errorDuration}</span>
      <p className={styles.duration_explain}>
        * In duration please select numbers from 1 to 12
      </p>
    </div>
  );
};

CountInputsWrapper.propTypes = InputsPropTypes;

export default CountInputsWrapper;
