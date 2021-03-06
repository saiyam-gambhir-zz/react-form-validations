const select = (props) => {
  return (
    <div className="FormGroup">
      <label>{props.label}</label>
      <select defaultValue={props.value} onChange={props.changed}>
        <option value={props.value} disabled>Select</option>
        {props.options && props.options.length > 0 ? props.options.map(option => (
          <option key={option} value={option}>{option}</option>
        )): null}
      </select>
      {props.touched && !props.valid ? <div className="ErrorMessage">{props.validationMessage}</div> : ''}
    </div>
  )
};

export default select;
