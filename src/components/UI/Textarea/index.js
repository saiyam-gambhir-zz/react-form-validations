const textArea = (props) => {
  return (
    <div className="FormGroup">
      <label>{props.label}</label>
      <textarea value={props.value} onChange={props.changed}></textarea>
      {props.touched && !props.valid ? <div className="ErrorMessage">{props.validationMessage}</div> : ''}
    </div>
  )
};

export default textArea;
