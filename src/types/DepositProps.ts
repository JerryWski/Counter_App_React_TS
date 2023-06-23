import PropTypes from 'prop-types';

const DepositProps = {
  principal: PropTypes.number.isRequired,
  rate: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
};

export default DepositProps;
