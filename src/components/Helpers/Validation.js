import * as yup from 'yup';

const REQUIRED = 'Necessarily';
const TYPE_ERROR = 'Must be string';
const VALID_EMAIL = 'Enter valid email';
const CONFIRM_PASSWORD = 'Please repeat password';

const validateSignUp = {
  name: yup.string().typeError(TYPE_ERROR).required(REQUIRED),
  email: yup.string().email(VALID_EMAIL).required(REQUIRED),
  password: yup.string().typeError(TYPE_ERROR).required(REQUIRED),
  confirmPassword: yup.string().oneOf([yup.ref('password')], CONFIRM_PASSWORD).required(REQUIRED),
};

const validateLogin = {
  email: yup.string().email(VALID_EMAIL).required(REQUIRED),
  password: yup.string().typeError(TYPE_ERROR).required(REQUIRED),
};

export const validateRegistration = () => yup.object(validateSignUp);
export const validateAuthorization = () => yup.object(validateLogin);
