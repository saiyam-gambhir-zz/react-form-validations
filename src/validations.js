export const isCheckboxChecked = (element) => {
  return element.valid;
};

export const isEmpty = (value) => {
  return value.length > 0 && value.trim().length > 0;
};

export const isOptionSelected = (value, defaultValue) => {
  return value.toLowerCase() !== defaultValue.toLowerCase();
};

export const isRegex = (value, regEx) => {
  return regEx.test(String(value.toLowerCase()));
};

export const minCharactersCheck = (value, charactersRequired = 50) => {
  return value.trim().length >= charactersRequired;
};
