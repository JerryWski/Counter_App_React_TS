export type CalculatorProps = {
  principal: number;
  rate: number;
  month: number;
  onPrincipalChange: (value: number) => void;
  onRateChange: (value: number) => void;
  onMonthChange: (value: number) => void;
};

export default CalculatorProps;
