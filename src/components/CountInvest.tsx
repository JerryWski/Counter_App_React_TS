import { useState } from 'react';
import styles from './CountInvest.module.css';
import { CalcProps } from '../types/Types';
import DepositInvestProps from '../types/DepositInvestProps';

const CountInvest: React.FC<CalcProps> = ({ principal, rate }) => {
  const [interest, setInterest] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const calculateInvest = () => {
    if (principal <= 0 || rate <= 0) {
      console.log('daj liczbe wieksza niz zero');
    }

    const calculatedInterest = principal * (rate / 100) * 0.81;
    const calculatedTotalAmount =
      principal + parseFloat(calculatedInterest.toFixed(2));

    setInterest(calculatedInterest.toFixed(2));
    setTotalAmount(calculatedTotalAmount.toFixed(2));
  };
  return (
    <div className={styles.investment_container}>
      <h2 className={styles.investment_subheader}>Check for Investment Fund</h2>
      <div className={styles.button_wrapper}>
        <button
          className={styles.calculate_btn__invest}
          id="buttons"
          type="button"
          onClick={calculateInvest}
        >
          Calculate for Investment Fund
        </button>
      </div>
      <div className={styles.result_info}>
        <p className={styles.amount_text__invest}>
          Interest amount*:
          <span className={styles.total_interest__invest}>{interest}</span> PLN
        </p>
        <p className={styles.amount_text__invest}>
          Total amount:
          <span className={styles.total_amount__invest}>{totalAmount}</span> PLN
        </p>
      </div>
    </div>
  );
};
CountInvest.propTypes = DepositInvestProps;
export default CountInvest;
