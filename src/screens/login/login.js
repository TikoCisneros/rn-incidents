import React from 'react';
import { StackActions } from '@react-navigation/native';
import PropTypes from 'prop-types';
import LoginComponent from '../../components/login';
import { AppScreens } from '../../navigation/screens';

const Login = ({ navigation: { dispatch }, doLogin }) => {
  const navigate = () => dispatch(StackActions.replace(AppScreens.Home));

  const handleOnSubmit = (values, { resetForm }) => {
    const { user: username, password } = values;
    resetForm();
    doLogin({ username, password }, navigate);
  };

  return <LoginComponent onSubmit={handleOnSubmit} />;
};

Login.propTypes = { doLogin: PropTypes.func.isRequired };

export default Login;
