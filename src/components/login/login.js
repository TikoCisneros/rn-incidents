import React from 'react';
import PropTypes from 'prop-types';
import LinearGradient from 'react-native-linear-gradient';
import { Formik } from 'formik';

import Input from '../common/input';

import Icons from '../../styles/icons';
import {
  gradientContainer,
  gradientColors,
  gradientStart,
  gradientEnd,
  FormContainer,
  ContentContainer,
  LogoContainer,
  SubmitButton,
} from './login.styles';

import CityIcon from '../../res/svg/smartCity.svg';

const FORM_INPUT_VALUES = {
  user: 'user',
  password: 'password',
};

const Login = ({ onSubmit }) => {
  const initialFormValues = {
    [FORM_INPUT_VALUES.user]: '',
    [FORM_INPUT_VALUES.password]: '',
  };

  return (
    <LinearGradient
      colors={gradientColors}
      start={gradientStart}
      end={gradientEnd}
      style={gradientContainer}>
      <ContentContainer>
        <FormContainer>
          <LogoContainer>
            <CityIcon width="120" height="120" />
          </LogoContainer>
          <Formik initialValues={initialFormValues} onSubmit={onSubmit}>
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <>
                <Input
                  onChangeText={handleChange(FORM_INPUT_VALUES.user)}
                  onBlur={handleBlur(FORM_INPUT_VALUES.user)}
                  value={values[FORM_INPUT_VALUES.user]}
                  placeholder="Escriba su usuario"
                  iconName={Icons.user}
                />
                <Input
                  onChangeText={handleChange(FORM_INPUT_VALUES.password)}
                  onBlur={handleBlur(FORM_INPUT_VALUES.password)}
                  value={values[FORM_INPUT_VALUES.password]}
                  placeholder="Escriba su contraseña"
                  secureTextEntry
                  iconName={Icons.lock}
                />
                <SubmitButton title="Ingresar" onPress={handleSubmit} />
              </>
            )}
          </Formik>
        </FormContainer>
      </ContentContainer>
    </LinearGradient>
  );
};

Login.propTypes = { onSubmit: PropTypes.func.isRequired };

export default Login;

export { FORM_INPUT_VALUES };
