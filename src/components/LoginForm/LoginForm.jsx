import React, { memo } from 'react';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';

import Button from '@mui/material/Button';

import Notification from '../Error/Error';
import { loginModal, signUpModal, toggleModal } from '../../redux/action';
import { validateRegistration, validateAuthorization } from '../Helpers/Validation';

import './LoginForm.css';

const authInitialValues = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

function LoginForm() {
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.auth.modalType);
  const error = useSelector((state) => state.auth.error);
  const isLogin = modalType === 'login';

  const handleClose = () => {
    dispatch(toggleModal({ status: false }));
  };

  const onSubmit = (value) => {
    const currentAction = isLogin
      ? loginModal(value)
      : signUpModal(value);

    dispatch(currentAction);
  };
  return (
    <div className="auth">
      <Formik
        initialValues={authInitialValues}
        validateOnBlur
        onSubmit={onSubmit}
        validationSchema={isLogin ? validateAuthorization : validateRegistration}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div>
            {!isLogin && (
              <>
                <span>Name</span>
                <p>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.name}
                  />
                </p>
                {touched.name && errors.name && (
                <div className="errors">
                  {errors.name}
                </div>
                ) }
              </>
            )}
            <span>Email</span>
            <p>
              <input
                type="text"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.email}
              />
            </p>
            {touched.email && errors.email && (
            <div className="errors">
              {errors.email}
            </div>
            ) }
            <span>Password</span>
            <p>
              <input
                type="text"
                name="password"
                onChange={handleChange}
                onBlur={handleBlur}
                values={values.password}
              />
            </p>
            {touched.password && errors.password && (
            <div className="errors">
              {errors.password}
            </div>
            ) }
            {!isLogin && (
              <>
                <span>Confirm Password</span>
                <p>
                  <input
                    type="text"
                    name="confirmPassword"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    values={values.confirmPassword}
                  />
                </p>
                {touched.confirmPassword && errors.confirmPassword
                && (
                <div className="errors">
                  {errors.confirmPassword}
                </div>
                )}
              </>
            ) }
            <Button
              className="submit"
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type="submit"
            >
              Submit
            </Button>
            <Button onClick={handleClose}>Cancel</Button>
            {error && (
            <Notification
              severity="error"
              title="Error Registration"
              text={error}
            />
            )}
          </div>
        )}
      </Formik>
    </div>
  );
}

export default memo(LoginForm);
