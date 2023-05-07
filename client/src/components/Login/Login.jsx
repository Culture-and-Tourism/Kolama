import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css';

const Login = () => {
  // Define Yup validation schema
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  // Handle form submission
  const handleSubmit = (values, { setSubmitting }) => {
    // You can perform your login logic here
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className='login'>
      <span className='loginTitle'>Login</span>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className='loginForm'>
            <label htmlFor='email'>Email</label>
            <Field
              type='text'
              id='email'
              name='email'
              placeholder='Enter your email...'
              className='loginInput'
            />
            <ErrorMessage name='email' component='div' className='error' />

            <label htmlFor='password'>Password</label>
            <Field
              type='password'
              id='password'
              name='password'
              placeholder='Enter your password...'
              className='loginInput'
            />
            <ErrorMessage name='password' component='div' className='error' />

            <button type='submit' className='loginButton' disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </Form>
        )}
      </Formik>
      {/* <button className='loginRegisterButton'>Register</button> */}
    </div>
  );
};

export default Login;
