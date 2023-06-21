import styles from './CountInvest.module.css';

const CountInvest = () => {
  return (
    <div className={styles.investment_container}>
      <h2 className={styles.investment_subheader}>Check for Investment Fund</h2>
      <div className={styles.button_wrapper}>
        <button
          className={styles.calculate_btn__invest}
          id="buttons"
          type="button"
        >
          Calculate for Investment Fund
        </button>
      </div>
      <div className={styles.result_info}>
        <p className={styles.amount_text__invest}>
          Interest amount*:
          <span className={styles.total_interest__invest}>s</span> PLN
        </p>
        <p className={styles.amount_text__invest}>
          Total amount:
          <span className={styles.total_amount__invest}>s</span> PLN
        </p>
      </div>
    </div>
  );
};

export default CountInvest;
