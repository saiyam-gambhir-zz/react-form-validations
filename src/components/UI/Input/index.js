import PropTypes from 'prop-types';

const input = (props) => {
  return (
    <div className={`FormGroup ${props.touched && !props.valid ? "Invalid" : null}`}>
      <label>{props.label}</label>
      <input value={props.value} type={props.type} checked={props.valid} onChange={props.changed} />
      {props.touched && !props.valid ? <div className="ErrorMessage">{props.validationMessage}</div> : ''}
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
