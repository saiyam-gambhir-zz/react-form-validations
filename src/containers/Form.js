import * as constants from '../constants';
import Button from '../components/UI/Button';
import FormInput from '../components/UI/FormInput';
import Select from '../components/UI/Select';
import TextArea from '../components/UI/Textarea';
import { Component } from "react";
import { isCheckboxChecked, isEmpty, isRegex, minCharactersCheck, selectBoxCheck } from '../validations';

class Form extends Component {

  createInputOptions = () => {
    return {
      touched: false,
      valid: false,
      value: ''
    }
  };

  state = {
    aboutMe: {
      ...this.createInputOptions(),
      label: 'About Me',
      validationMessage: constants.MINIMUM_CHARACTERS_REQUIRED,
      validations: {required: true, minLength: 50}
    },

    email: {
      ...this.createInputOptions(),
      label: 'Email',
      type: 'text',
      validationMessage: constants.INVALID_EMAIL,
      validations: {required: true, isEmail: true}
    },

    homePage: {
      ...this.createInputOptions(),
      label: 'Home Page',
      type: 'text',
      validationMessage: constants.INVALID_URL,
      validations: {required: true, isUrl: true}
    },

    loginId: {
      ...this.createInputOptions(),
      label: 'Login ID',
      type: 'text',
      validationMessage: constants.IS_REQUIRED,
      validations: {required: true}
    },

    name: {
      ...this.createInputOptions(),
      label: 'Name',
      type: 'text',
      validationMessage: constants.IS_REQUIRED,
      validations: {required: true}
    },

    notification: {
      ...this.createInputOptions(),
      label: 'Receive Notifications',
      type: 'checkbox',
      validationMessage: constants.IS_REQUIRED,
      validations: {required: true, isCheckBox: true}
    },

    timeZones: {
      ...this.createInputOptions(),
      label: 'Timezone',
      options: constants.timeZones,
      validationMessage: constants.IS_REQUIRED,
      validations: {isSelect: true}
    }
  };

  checkValidity = (value, rules) => {
    let isValid = true;
    if(!rules) return true;

    if(rules.required) {
      isValid = isEmpty(value);
    }

    if(rules.isEmail) {
      isValid = isRegex(value, constants.EMAIL_REGEX);
    }

    if(rules.isUrl) {
      isValid = isRegex(value, constants.URL_REGEX);
    }

    if(rules.minLength) {
      isValid = minCharactersCheck(value);
    }

    if(rules.isSelect) {
      isValid = selectBoxCheck(value, 'select');
    }

    if(rules.isCheckBox) {
      isValid = isCheckboxChecked(value);
    }

    return isValid;
  };

  inputChangedHandler = (event, inputIdentfier) => {
    let updatedInputIdentfier = {...this.state[inputIdentfier]};
    updatedInputIdentfier.touched = true;
    if(updatedInputIdentfier.type === 'checkbox') {
      updatedInputIdentfier.valid = event.target.checked;
    } else {
      updatedInputIdentfier.value = event.target.value;
      updatedInputIdentfier.valid = this.checkValidity(event.target.value, updatedInputIdentfier.validations);
    }
    this.setState({ [inputIdentfier]: updatedInputIdentfier });
  };

  resetInputField = (inputIdentfier) => {
    document.querySelector('.UserForm select').selectedIndex = 0;
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

    isFormValid = validFormInputs.every(input => {
      return input;
    });

    this.checkIfFormIsValid(isFormValid);
    this.scrollToTop();
  };

  renderForm = () => {
    return <form className="UserForm" onSubmit={this.onSubmitHandler}>
      <FormInput
        changed={(event) => this.inputChangedHandler(event, 'loginId')}
        {...this.state['loginId']} />

      <FormInput
        changed={(event) => this.inputChangedHandler(event, 'email')}
        {...this.state['email']} />

      <FormInput
        changed={(event) => this.inputChangedHandler(event, 'name')}
        {...this.state['name']} />

      <Select
        changed={(event) => this.inputChangedHandler(event, 'timeZones')}
        {...this.state['timeZones']} />

      <FormInput
        changed={(event) => this.inputChangedHandler(event, 'homePage')}
        {...this.state['homePage']} />

      <TextArea
        changed={(event) => this.inputChangedHandler(event, 'aboutMe')}
        {...this.state['aboutMe']} />

      <FormInput
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
