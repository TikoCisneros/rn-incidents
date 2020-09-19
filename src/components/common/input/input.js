import React from 'react';
import { Input as NBInput } from 'native-base';
import PropTypes from 'prop-types';

import Icon from '../icon';
import { ErrorLabel, InputContainer, iconStyle } from './input.styles';

const Input = ({
  itemStyle,
  inputStyle,
  onChangeText,
  onBlur,
  value,
  placeholder,
  autoCompleteType,
  secureTextEntry,
  isError,
  errorLabel,
  iconName,
}) => (
  <>
    <InputContainer regular style={itemStyle} error={isError}>
      {iconName && <Icon style={iconStyle} name={iconName} />}
      <NBInput
        style={inputStyle}
        onChangeText={onChangeText}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
        autoCompleteType={autoCompleteType}
        secureTextEntry={secureTextEntry}
      />
    </InputContainer>
    {isError && <ErrorLabel>{errorLabel}</ErrorLabel>}
  </>
);

Input.propTypes = {
  itemStyle: PropTypes.object,
  inputStyle: PropTypes.object,
  onChangeText: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  secureTextEntry: PropTypes.bool,
  autoCompleteType: PropTypes.string,
  isError: PropTypes.bool,
  errorLabel: PropTypes.string,
  iconName: PropTypes.string,
};

Input.defaultProps = {
  itemStyle: undefined,
  inputStyle: undefined,
  autoCompleteType: undefined,
  secureTextEntry: false,
  isError: false,
  errorLabel: undefined,
  iconName: undefined,
};

export default Input;
