import * as constants from '../constants';
import * as validations  from '../validations';
import Button from '../components/UI/Button';
import Input from '../components/UI/Input';
import Select from '../components/UI/Select';
import TextArea from '../components/UI/Textarea';
import { Component } from "react";

class Form extends Component {

  createInputOptions = (label, type, validationMessage, validations) => {
    return {
      label,
      touched: false,
      type,
      valid: false,
      validationMessage,
      validations: {...validations},
      value: ''
    }
  };

  state = {
    aboutMe: { ...this.createInputOptions('About Me', null, constants.MINIMUM_CHARACTERS_REQUIRED, {required: true, minLength: 50}) },
    email: { ...this.createInputOptions('Email', 'text', constants.INVALID_EMAIL, {required: true, isEmail: true}) },
    homePage: { ...this.createInputOptions('Home Page', 'text', constants.INVALID_URL, {required: true, isUrl: true}) },
    loginId: { ...this.createInputOptions('Login ID', 'text', constants.IS_REQUIRED, {required: true}) },
    name: { ...this.createInputOptions('Name', 'text', constants.IS_REQUIRED, {required: true}) },
    notification: { ...this.createInputOptions('Receive Notifications', 'checkbox', constants.IS_REQUIRED, {required: true, isCheckBox: true}) },
    timeZones: { ...this.createInputOptions('Timezone', null, constants.IS_REQUIRED, {isSelect: true}), options: constants.timeZones }
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    const { isCheckBox, isEmail, isSelect, isUrl, minLength, required } = rules;

    if(!rules) return true;

    if(required) {
      isValid = validations.isEmpty(value);
    }

    if(isEmail) {
      isValid = validations.isRegex(value, constants.EMAIL_REGEX);
    }

    if(isUrl) {
      isValid = validations.isRegex(value, constants.URL_REGEX);
    }

    if(minLength) {
      isValid = validations.minCharactersCheck(value);
    }

    if(isSelect) {
      isValid = validations.selectBoxCheck(value, 'select');
    }

    if(isCheckBox) {
      isValid = validations.isCheckboxChecked(value);
    }

    return isValid;
  };

  inputChangedHandler = (event, inputIdentfier) => {
    let updatedInputIdentfier = {...this.state[inputIdentfier]};
    if(updatedInputIdentfier.type === 'checkbox') {
      updatedInputIdentfier.valid = event.target.checked;
    } else {
      updatedInputIdentfier.value = event.target.value;
      updatedInputIdentfier.valid = this.checkValidity(event.target.value, updatedInputIdentfier.validations);
    }
    this.setState({ [inputIdentfier]: updatedInputIdentfier });
  };

  resetInputField = (inputIdentfier) => {
    inputIdentfier.touched = false;
    inputIdentfier.valid = false;
    inputIdentfier.value = '';
  };

  checkIfFormIsValid = (isFormValid) => {
    if(isFormValid) {
      for(let key in this.state) {
        let updatedInputIdentfier = {...this.state[key]};
        this.resetInputField(updatedInputIdentfier);
        this.setState({ [key]: updatedInputIdentfier });
      }

      document.querySelector('.UserForm select').selectedIndex = 0;
      alert('Form submitted successfully!');
    }
  };

  scrollToTop = () => {
    window.scrollTo({
      behavior: 'smooth',
      top: 0
    });
  };

  onSubmitHandler = (event) => {
    event.preventDefault();
    let validFormInputs = [],
        isFormValid = false;

    for(let key in this.state) {
      let updatedInputIdentfier = {...this.state[key]};
      updatedInputIdentfier.touched = true;
      validFormInputs = [...validFormInputs, this.state[key].valid];
      this.setState({ [key]: updatedInputIdentfier });
    }

    isFormValid = validFormInputs.every(entry => entry);

    this.checkIfFormIsValid(isFormValid);
    this.scrollToTop();
  };

  renderForm = () => {
    return <form className="UserForm" onSubmit={this.onSubmitHandler}>
      <Input
        changed={(event) => this.inputChangedHandler(event, 'loginId')}
        {...this.state['loginId']} />

      <Input
        changed={(event) => this.inputChangedHandler(event, 'email')}
        {...this.state['email']} />

      <Input
        changed={(event) => this.inputChangedHandler(event, 'name')}
        {...this.state['name']} />

      <Select
        changed={(event) => this.inputChangedHandler(event, 'timeZones')}
        {...this.state['timeZones']} />

      <Input
        changed={(event) => this.inputChangedHandler(event, 'homePage')}
        {...this.state['homePage']} />

      <TextArea
        changed={(event) => this.inputChangedHandler(event, 'aboutMe')}
        {...this.state['aboutMe']} />

      <Input
        changed={(event) => this.inputChangedHandler(event, 'notification')}
        {...this.state['notification']} />

      <Button text="Submit" />
    </form>
  };

  render () {
    return (
      <>
        <h1>Registration Form</h1>
        {this.renderForm()}
      </>
    )
  };
};

export default Form;
