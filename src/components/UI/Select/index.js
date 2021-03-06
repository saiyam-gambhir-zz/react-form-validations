import PropTypes from 'prop-types';

const select = (props) => {
  return (
    <div className={`FormGroup ${props.touched && !props.valid ? "Invalid" : null}`}>
      <label>{props.label}</label>
      <select defaultValue="Select" onChange={props.changed}>
        <option value="Select" disabled>Select</option>
        {props.options && props.options.length > 0 ? props.options.map(option => (
          <option key={option} value={option}>{option}</option>
        )): null}
      </select>
      {props.touched && !props.valid ? <div className="ErrorMessage">{props.validationMessage}</div> : null}
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
