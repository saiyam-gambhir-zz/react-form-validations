const formInput = (props) => {
  return (
    <div className="FormGroup">
      <label>{props.label}</label>
      <input value={props.value} type={props.type} onChange={props.changed} />
      {props.touched && !props.valid ? <div className="ErrorMessage">{props.validationMessage}</div> : ''}
    </div>
  )
};

export default formInput;
