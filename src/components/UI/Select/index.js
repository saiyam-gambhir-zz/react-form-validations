import PropTypes from 'prop-types';
import ValidationMessage from '../ValidationMessage';

const select = (props) => {

  const invalidClass = `${props.touched && !props.valid ? "Invalid" : null}`;

  return (
    <div className={`FormGroup ${invalidClass}`}>
      <label>{props.label}</label>
      <select defaultValue="Select" onChange={props.changed}>
        <option value="Select" disabled>Select</option>
        {props.options && props.options.length > 0 ? props.options.map(option => (
          <option key={option} value={option}>{option}</option>
        )): null}
      </select>
      <ValidationMessage touched={props.touched} valid={props.valid} validationMessage={props.validationMessage} />
    </div>
  )
};

select.defaultProps = {
  changed: () => {},
  label: '',
  options: [],
  touched: false,
  valid: false,
  validationMessage: ''
};

select.propTypes = {
  changed: PropTypes.func,
  label: PropTypes.string,
  options: PropTypes.array,
  touched: PropTypes.bool,
  valid: PropTypes.bool,
  validationMessage: PropTypes.string
};

export default select;
