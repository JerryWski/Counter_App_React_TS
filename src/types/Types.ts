export type InputCalcProps = {
  principal: number | string;
  rate: number | string;
  month: number | string;
  onPrincipalChange: (value: number | string) => void;
  onRateChange: (value: number | string) => void;
  onMonthChange: (value: number | string) => void;
};

export type CalcProps = {
  principal: number | string;
  rate: number | string;
  month: number | string;
};
