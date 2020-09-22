import React from 'react';
import { Icon } from 'native-base';

import Greeting from './greeting';
import Incidents from '../incidents';
import MessagePrompt from '../messagePrompt';
import { FabButton } from './home.styles';

import Icons from '../../styles/icons';
import { PROMPT_TYPES } from '../../common/constants';

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
    <Incidents incidents={incidents} />
    <FabButton
      active
      direction="up"
      position="bottomRight"
      onPress={onAddIncidentPress}>
      <Icon type="AntDesign" name={Icons.add} />
    </FabButton>
    <MessagePrompt
      type={PROMPT_TYPES.error}
      visible={promptVisible}
      onHideModal={onHidePrompt}
      title="Titulo"
      description="Es personal y puedes usarla para ingresar o hacer tus transacciones en tu Banca web. ¡No la compartas con nadie!"
    />
  </>
);

export default Home;
