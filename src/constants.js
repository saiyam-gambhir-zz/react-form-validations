// Regular Expressions //
export const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
export const URL_REGEX = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/


// Validation Messages
export const CHECK_NOTIFICATIONS = 'Notifications should be selected.'
export const INVALID_EMAIL = 'Email Address is not valid.';
export const INVALID_URL = 'Homepage is not a valid URL.';
export const IS_REQUIRED = 'Field is required.';
export const MINIMUM_CHARACTERS_REQUIRED = 'Minimum 50 characters required.';

// Data
export const timeZones = ['GMT', 'IST', 'AEST'];
