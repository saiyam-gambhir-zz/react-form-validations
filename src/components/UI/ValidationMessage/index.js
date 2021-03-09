import PropTypes from 'prop-types';

const validationMessage = (props) => {
  return props.touched && !props.valid ? <div className="ErrorMessage">{props.validationMessage}</div> : null
};

validationMessage.defaultProps = {
  touched: false,
  valid: false,
  validationMessage: ''
};

validationMessage.propTypes = {
  touched: PropTypes.bool,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string
};

export default validationMessage;
