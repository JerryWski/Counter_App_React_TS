import { useState } from 'react';
import styles from './CountDeposit.module.css';
import DepositProps from '../types/DepositProps';
import { DepositCalcProps } from '../types/Types';

const CountDeposit: React.FC<DepositCalcProps> = ({
  principal,
  rate,
  month,
}) => {
  const [interest, setInterest] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const calculateDeposit = () => {
    if (principal <= 0 || rate <= 0) {
      console.log('daj liczbe wieksza niz zero');
    }

    const calculatedInterest = principal * (rate / 100) * 0.81 * (month / 12);
    const calculatedTotalAmount =
      principal + parseFloat(calculatedInterest.toFixed(2));

    setInterest(calculatedInterest.toFixed(2));
    setTotalAmount(calculatedTotalAmount.toFixed(2));
  };

  return (
    <div className={styles.deposit_container}>
      <h2 className={styles.deposit_subheader}>Check for Bank Deposit</h2>
      <div className={styles.button_wrapper}>
        <button
          className={styles.calculate_btn__depo}
          id="buttons"
          type="button"
          onClick={calculateDeposit}
        >
          Calculate for deposit
        </button>
      </div>
      <div className={styles.result_info}>
        <p className={styles.amount_text__depo}>
          Interest amount*:
          <span className={styles.total_interest__depo}>{interest}</span> PLN
        </p>
        <p className={styles.amount_text__depo}>
          Total amount:
          <span className={styles.total_amount__depo}>{totalAmount}</span> PLN
        </p>
      </div>
    </div>
  );
};
CountDeposit.propTypes = DepositProps;
export default CountDeposit;
