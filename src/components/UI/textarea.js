import PropTypes from 'prop-types';
import ValidationMessage from './validationMessage';

const textArea = (props) => {

  const invalidClass = `${props.touched && !props.valid ? "Invalid" : null}`;

  return (
    <div className={`FormGroup ${invalidClass}`}>
      <label>{props.label}</label>
      <textarea value={props.value} onChange={props.changed}></textarea>
      <ValidationMessage touched={props.touched} valid={props.valid} validationMessage={props.validationMessage} />
    </div>
  )
};

textArea.defaultProps = {
  changed: () => {},
  label: '',
  touched: false,
  valid: false,
  validationMessage: '',
  value: ''
};

textArea.propTypes = {
  changed: PropTypes.func,
  label: PropTypes.string,
  touched: PropTypes.bool,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string,
  value: PropTypes.string
};

export default textArea;
