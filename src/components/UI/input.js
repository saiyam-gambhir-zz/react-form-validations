import PropTypes from 'prop-types';
import ValidationMessage from './validationMessage';

const input = (props) => {

  const invalidClass = `${props.touched && !props.valid ? "Invalid" : null}`;

  return (
    <div className={`FormGroup ${invalidClass}`}>
      <label>{props.label}</label>
      <input value={props.value} type={props.type} checked={props.valid} onChange={props.changed} />
      <ValidationMessage touched={props.touched} valid={props.valid} validationMessage={props.validationMessage} />
    </div>
  )
};

input.defaultProps = {
  changed: () => {},
  label: '',
  touched: false,
  type: '',
  valid: false,
  validationMessage: '',
  value: ''
};

input.propTypes = {
  changed: PropTypes.func,
  label: PropTypes.string,
  touched: PropTypes.bool,
  type: PropTypes.string,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  value: PropTypes.string
};

export default input;
