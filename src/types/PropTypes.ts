import PropTypes from 'prop-types';

const InputsPropTypes = {
  principal: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  onPrincipalChange: PropTypes.func.isRequired,
  onRateChange: PropTypes.func.isRequired,
  onMonthChange: PropTypes.func.isRequired,
};

export default InputsPropTypes;
