/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { memo } from 'react';
import { Formik } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import * as yup from 'yup';

import './LoginForm.css';
import { loginModal } from '../../redux/action';

function LoginForm() {
  const dispatch = useDispatch();
  const modalType = useSelector((state) => state.auth.modalType);
  const validationSchema = yup.object().shape({
    name: yup.string().typeError('Must be string'),
    email: yup.string().email('Enter valid email').required('Necessarily'),
    password: yup.string().typeError('Must be string').required('Necessarily'),
    confirmPassword: yup.string().oneOf([yup.ref('password')], 'Please repeat password'),

  });
  const isLogin = modalType === 'login';

  const onSubmit = (value) => {
    console.log(value);
    dispatch(loginModal(value));
  };
  return (
    <div className="auth">
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validateOnBlur
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {({
          values, errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty,
        }) => (
          <div>
            {!isLogin && (
              <>
                <label htmlFor="name">Name</label>
                <p>
                  <input
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

            <label htmlFor="name">Email</label>
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
            <label htmlFor="password">Password</label>
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
                <label htmlFor="confirmPassword">Confirm Password</label>
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
            <button
              className="submit"
              disabled={!isValid && !dirty}
              onClick={handleSubmit}
              type="submit"
            >
              Submit

            </button>
          </div>
        )}
      </Formik>
    </div>
  );
}

export default memo(LoginForm);
