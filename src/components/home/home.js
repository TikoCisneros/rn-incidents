import React from 'react';
import { Icon } from 'native-base';

import Greeting from './greeting';
import Incidents from '../incidents';
import { FabButton } from './home.styles';

import Icons from '../../styles/icons';

const Home = ({ userName, incidents, onAddIncidentPress }) => (
  <>
    <Greeting userName={userName} onPressInfo={() => alert('show modal')} />
    <Incidents incidents={incidents} />
    <FabButton
      active
      direction="up"
      position="bottomRight"
      onPress={onAddIncidentPress}>
      <Icon type="AntDesign" name={Icons.add} />
    </FabButton>
  </>
);

export default Home;
