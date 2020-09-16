import React from 'react';
import LoginComponent from '../components/login';
import { AppScreens } from '../navigation/screens';

const Login = ({ navigation: { push } }) => {
  const handleOnSubmit = (values, { resetForm }) => {
    console.warn(JSON.stringify(values));
    resetForm();
    push(AppScreens.Home);
  };

  return <LoginComponent onSubmit={handleOnSubmit} />;
};

export default Login;
