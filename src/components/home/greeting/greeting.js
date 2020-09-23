import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { TYPOGRAPHY_TYPES } from '../../common/typography';
import Avatar from '../../common/avatar';

import {
  Container,
  GreetingContainer,
  GreetingText,
  InfoIcon,
} from './greeting.styles';

const Greeting = ({ userName, onPressInfo }) => (
  <Container>
    <GreetingContainer>
      <Avatar firstLetter="A" />
      <GreetingText type={TYPOGRAPHY_TYPES.HEADING_3}>
        {`Hola ${userName}`}
      </GreetingText>
    </GreetingContainer>
    <TouchableOpacity onPress={onPressInfo}>
      <InfoIcon name="information-circle" />
    </TouchableOpacity>
  </Container>
);

Greeting.propTypes = {
  userName: PropTypes.string.isRequired,
  onPressInfo: PropTypes.func.isRequired,
};

export default Greeting;
