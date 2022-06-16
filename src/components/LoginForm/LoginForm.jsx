/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { memo } from 'react';
import { Formik, Field, Form } from 'formik';
import { useSelector } from 'react-redux';

import { validateAuthorization, validateRegistration } from '../../Helpers/AuthValidation';
import './LoginForm.css';

function LoginForm() {
  const modalType = useSelector((state) => state.auth.modalType);

  const isLogin = modalType === 'login';

  const onSubmit = () => {
  };
  return (
    <div className="auth">
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validateOnBlur
        onSubmit={onSubmit}
        validationSchema={validateRegistration}
      >
        <Form>
          {!isLogin
          && (
          <>
            <label>Name</label>
            <Field id="name" name="name" placeholder="" />
          </>
          )}
          <label htmlFor="password">Password</label>
          <Field id="password" name="password" placeholder="" />

          <label htmlFor="email">Email</label>
          <Field
            id="email"
            name="email"
            placeholder=""
            type="email"
          />
          {errors.email && <div id="feedback">{errors.email}</div>}
          <button className="submit" type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default memo(LoginForm);
