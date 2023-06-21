/* eslint-disable react/self-closing-comp */
import styles from './CountDeposit.module.css';

const CountDeposit = () => {
  return (
    <div className={styles.deposit_container}>
      <h2 className={styles.deposit_subheader}>Check for Bank Deposit</h2>
      <div className={styles.button_wrapper}>
        <button
          className={styles.calculate_btn__depo}
          id="buttons"
          type="button"
        >
          Calculate for deposit
        </button>
      </div>
      <div className={styles.result_info}>
        <p className={styles.amount_text__depo}>
          Interest amount*:
          <span className={styles.total_interest__depo}>s</span> PLN
        </p>
        <p className={styles.amount_text__depo}>
          Total amount:
          <span className={styles.total_amount__depo}>s</span> PLN
        </p>
      </div>
    </div>
  );
};

export default CountDeposit;
