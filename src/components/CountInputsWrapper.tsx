/* eslint-disable react/self-closing-comp */
import styles from './CountInputsWrapper.module.css';
import InputsPropTypes from '../types/PropTypes';
import { CalculatorProps } from '../types/Types';

const CountInputsWrapper: React.FC<CalculatorProps> = ({
  principal,
  rate,
  month,
  onPrincipalChange,
  onRateChange,
  onMonthChange,
}) => {
  const handlePrincipalChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const principalValue = parseFloat(e.target.value);
    onPrincipalChange(principalValue);
  };

  const handleRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rateValue = parseFloat(e.target.value);
    onRateChange(rateValue);
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const monthValue = parseFloat(e.target.value);
    onMonthChange(monthValue);
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

CountInputsWrapper.propTypes = InputsPropTypes;

export default CountInputsWrapper;
