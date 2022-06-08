import React, { memo } from 'react';
import { Formik, Field, Form } from 'formik';
import { useSelector } from 'react-redux';

function LoginForm() {
  const modalType = useSelector((state) => state.auth.modalType);

  const isLogin = modalType === 'login';

  const onSubmit = () => {};
  return (
    <div>
      <h1>Sign Up</h1>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={onSubmit}
      >
        <Form>
          {/* <label htmlFor="name">First Name</label> */}
          <Field id="name" name="name" placeholder="Jane" />
          {/* <label htmlFor="email">Last Name</label> */}
          <Field id="password" name="password" placeholder="Doe" />

          {/* <label htmlFor="password">Email</label> */}
          <Field
            id="email"
            name="email"
            placeholder="jane@acme.com"
            type="email"
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
}

export default memo(LoginForm);
