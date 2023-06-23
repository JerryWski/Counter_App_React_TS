export type InputCalcProps = {
  principal: number;
  rate: number;
  month: number;
  onPrincipalChange: (value: number) => void;
  onRateChange: (value: number) => void;
  onMonthChange: (value: number) => void;
};

export type CalcProps = {
  principal: number;
  rate: number;
  month: number;
};
