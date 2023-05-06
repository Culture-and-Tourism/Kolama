import React from 'react';
import './Register.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Register = () => {
    const initialValues = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      profilePicture: null,
    };
  
    const validationSchema = Yup.object({
      username: Yup.string().required('Username is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Confirm Password is required'),
      profilePicture: Yup.mixed().required('Profile Picture is required'),
    });
  
    const handleSubmit = (values, { setSubmitting }) => {
      // Perform form submission logic here
      console.log(values);
      setSubmitting(false);
    };
  
    return (
      <div className="register">
        <span className="registerTitle">Register</span>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="registerForm">
            <label htmlFor="username">Username</label>
            <Field
              className="registerInput"
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username..."
            />
            <ErrorMessage name="username" component="div" className="error" />
  
            <label htmlFor="email">Email</label>
            <Field
              className="registerInput"
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email..."
            />
            <ErrorMessage name="email" component="div" className="error" />
  
            <label htmlFor="password">Password</label>
            <Field
              className="registerInput"
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password..."
            />
            <ErrorMessage name="password" component="div" className="error" />
  
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              className="registerInput"
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password..."
            />
            <ErrorMessage name="confirmPassword" component="div" className="error" />
  
            <label htmlFor="profilePicture">Profile Picture</label>
            <Field
              className="registerInput"
              type="file"
              id="profilePicture"
              name="profilePicture"
            />
            <ErrorMessage name="profilePicture" component="div" className="error" />
  
            <button className="registerButton" type="submit">
              Register
            </button>
          </Form>
        </Formik>
      </div>
    );
  };
  
export default Register;