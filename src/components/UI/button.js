import PropTypes from 'prop-types';

const button = (props) => (
  <div className="FormGroup">
    <button className="Button">{props.text}</button>
  </div>
);

button.defaultProps = {
  text: ''
};

button.propTypes = {
  text: PropTypes.string
};

export default button;
