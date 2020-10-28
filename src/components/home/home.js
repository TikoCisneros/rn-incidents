import React from 'react';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

import Incidents from '../incidents';
import { FabButton } from './home.styles';

import Icons from '../../styles/icons';

const Home = ({ incidents, onAddIncidentPress, loadStatus }) => (
  <>
    <Incidents incidents={incidents} loadStatus={loadStatus} />
    <FabButton
      active
      direction="up"
      position="bottomRight"
      onPress={onAddIncidentPress}>
      <Icon type="AntDesign" name={Icons.add} />
    </FabButton>
  </>
);

Home.propTypes = {
  incidents: PropTypes.array.isRequired,
  onAddIncidentPress: PropTypes.func.isRequired,
  loadStatus: PropTypes.string.isRequired,
};

export default Home;
