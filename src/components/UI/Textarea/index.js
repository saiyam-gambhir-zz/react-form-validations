import PropTypes from 'prop-types';

const textArea = (props) => {
  return (
    <div className={`FormGroup ${props.touched && !props.valid ? "Invalid" : null}`}>
      <label>{props.label}</label>
      <textarea value={props.value} onChange={props.changed}></textarea>
      {props.touched && !props.valid ? <div className="ErrorMessage">{props.validationMessage}</div> : ''}
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
