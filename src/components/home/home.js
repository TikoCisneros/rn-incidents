import React from 'react';
import { Icon } from 'native-base';

import { Content } from '../common/content';
import Typography, { TYPOGRAPHY_TYPES } from '../common/typography';

import Incidents from '../incidents';
import { GreetingContainer, Name, FabButton } from './home.styles';

import Icons from '../../styles/icons';

const Home = ({ userName, incidents, onAddIncidentPress }) => (
  <Content>
    <GreetingContainer>
      <Typography type={TYPOGRAPHY_TYPES.HEADING_5} bold>
        {'Hola, '}
        <Name type={TYPOGRAPHY_TYPES.HEADING_5}>{userName}</Name>
      </Typography>
    </GreetingContainer>
    <Incidents incidents={incidents} />
    <FabButton
      active
      direction="up"
      position="bottomRight"
      onPress={onAddIncidentPress}>
      <Icon type="AntDesign" name={Icons.add} />
    </FabButton>
  </Content>
);

export default Home;
