/* eslint-disable react/prop-types */
import { useState } from 'react';
import styles from './CountInvest.module.css';
import { CalcProps } from '../../../../types/Types';
import { CurrencySelector } from '../CurrencySelector';

interface CountInvestProps extends CalcProps {
  setErrorText: (errorText: string) => void;
  setErrorDuration: (errorText: string) => void;
}

const CountInvest: React.FC<CountInvestProps> = ({
  principal,
  rate,
  month,
  setErrorText,
  setErrorDuration,
}) => {
  const [interest, setInterest] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [selectedCurrency, setSelectedCurrency] = useState('PLN');

  const calculateInvest = () => {
    if (Number(principal) <= 0 || Number(rate) <= 0) {
      setErrorText('Please enter a number greater than 0');
      return;
    }
    if (Number(month) < 1 || Number(month) > 12) {
      setErrorDuration('Please enter a number from 1 to 12');
      return;
    }

    const calculatedInterest = Number(principal) * (Number(rate) / 100) * 0.81;
    const calculatedTotalAmount =
      Number(principal) + parseFloat(calculatedInterest.toFixed(2));

    setInterest(calculatedInterest.toFixed(2));
    setTotalAmount(calculatedTotalAmount.toFixed(2));
    setErrorText(''); // calling prop func
    setErrorDuration('');

    const errorElement = document.querySelector('.error_text__amount');
    if (errorElement) {
      errorElement.textContent = '';
    }
    const errorDuration = document.querySelector('.error_text');
    if (errorDuration) {
      errorDuration.textContent = '';
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
      <CurrencySelector
        selectedCurrency={selectedCurrency}
        onCurrencyChange={setSelectedCurrency}
      />
      <div className={styles.result_info}>
        <p className={styles.amount_text__invest}>
          Interest amount*:
          <span className={styles.total_interest__invest}>{interest}</span>{' '}
          {selectedCurrency}
        </p>
        <p className={styles.amount_text__invest}>
          Total amount:
          <span className={styles.total_amount__invest}>
            {totalAmount}
          </span>{' '}
          {selectedCurrency}
        </p>
      </div>
    </div>
  );
};
// CountInvest.propTypes = DepositInvestProps;
export default CountInvest;
