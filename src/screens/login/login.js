import React, { useEffect } from 'react';
import { StackActions } from '@react-navigation/native';
import PropTypes from 'prop-types';
import LoginComponent from '../../components/login';
import { AppScreens } from '../../navigation/screens';

const Login = ({
  navigation: { dispatch },
  fetchIncidentCatalogs,
  doLogin,
}) => {
  useEffect(() => {
    fetchIncidentCatalogs();
  }, []);

  const navigate = () => dispatch(StackActions.replace(AppScreens.App));

  const handleOnSubmit = (values, { resetForm }) => {
    const { user: username, password } = values;
    resetForm();
    doLogin({ username, password }, navigate);
  };

  return <LoginComponent onSubmit={handleOnSubmit} />;
};

Login.propTypes = {
  doLogin: PropTypes.func.isRequired,
  fetchIncidentCatalogs: PropTypes.func.isRequired,
};

export default Login;
