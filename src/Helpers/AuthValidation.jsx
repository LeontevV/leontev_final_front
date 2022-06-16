import * as yup from 'yup';

export const validateRegistration = () => yup.object({
  name: yup
    .string()
    .max(15, 'Must be 15 characters or less'),
  email: yup
    .string()
    .email('Email is invalid')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
export const validateAuthorization = () => yup.object({
  email: yup
    .string()
    .email('Email is invalid')
    .required('Email is required'),
  password: yup
    .string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});
