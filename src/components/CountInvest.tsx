import { useState } from 'react';
import styles from './CountInvest.module.css';
import { CalcProps } from '../types/Types';
import DepositInvestProps from '../types/DepositInvestProps';

interface CountInvestProps extends CalcProps {
  setErrorText: (errorText: string) => void;
}

const CountInvest: React.FC<CountInvestProps> = ({
  principal,
  rate,
  setErrorText,
}) => {
  const [interest, setInterest] = useState('');
  const [totalAmount, setTotalAmount] = useState('');

  const calculateInvest = () => {
    if (principal <= 0 || rate <= 0) {
      setErrorText('Please enter a number greater than 0');
      return;
    }

    const calculatedInterest = principal * (rate / 100) * 0.81;
    const calculatedTotalAmount =
      principal + parseFloat(calculatedInterest.toFixed(2));

    setInterest(calculatedInterest.toFixed(2));
    setTotalAmount(calculatedTotalAmount.toFixed(2));
    setErrorText(''); // calling prop func
    const errorElement = document.querySelector('.error_text__amount');
    if (errorElement) {
      errorElement.textContent = '';
    }
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
