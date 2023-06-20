import styles from './CountInputsWrapper.module.css';

const CountInputsWrapper = () => {
  return (
    <div className={styles.inputs_wrapper}>
      <span className={styles.error_text__amount}>Error text amount</span>
      <div className={styles.input_container}>
        <input required type="number" />
        <span>Starting amount</span>
        <i></i>
      </div>
      <div className={styles.input_container}>
        <input required type="number" />
        <span>Annunal rate(%)</span>
        <i></i>
      </div>
      <div className={styles.input_container}>
        <input required type="number" />
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
