import styles from './CurrencySelector.module.css';
// eslint-disable-next-line import/no-named-as-default
import CurrencyTypes from '../types/CurrencyTypes';

interface CurrencySelectorProps {
  selectedCurrency: string;
  onCurrencyChange: (currency: string) => void;
}

const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  selectedCurrency,
  onCurrencyChange,
}) => {
  const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onCurrencyChange(e.target.value);
  };
  return (
    <select
      value={selectedCurrency}
      onChange={handleCurrencyChange}
      className={styles.currency_container}
    >
      <option value="PLN">PLN</option>
      <option value="EUR">EUR</option>
      <option value="USD">USD</option>
    </select>
  );
};
CurrencySelector.propTypes = CurrencyTypes;

export default CurrencySelector;
