import React from 'react';
import { Icon } from 'native-base';
import PropTypes from 'prop-types';

import Greeting from './greeting';
import Incidents from '../incidents';
import InfoPrompt from './infoPrompt';
import { FabButton } from './home.styles';

import Icons from '../../styles/icons';
import { STATUS_TYPES } from '../../common/constants';

const Home = ({
  userName,
  incidents,
  promptVisible,
  onAddIncidentPress,
  onShowPrompt,
  onHidePrompt,
}) => (
  <>
    <Greeting userName={userName} onPressInfo={onShowPrompt} />
    <Incidents incidents={incidents} loadStatus={STATUS_TYPES.success} />
    <FabButton
      active
      direction="up"
      position="bottomRight"
      onPress={onAddIncidentPress}>
      <Icon type="AntDesign" name={Icons.add} />
    </FabButton>
    <InfoPrompt visible={promptVisible} onHidePrompt={onHidePrompt} />
  </>
);

Home.propTypes = {
  userName: PropTypes.string.isRequired,
  incidents: PropTypes.array.isRequired,
  promptVisible: PropTypes.bool.isRequired,
  onAddIncidentPress: PropTypes.func.isRequired,
  onShowPrompt: PropTypes.func.isRequired,
  onHidePrompt: PropTypes.func.isRequired,
};

export default Home;
