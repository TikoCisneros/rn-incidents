import React, { useState, useEffect } from 'react';
import { STATUS_TYPES } from '../../common/constants';
import HomeComponent from '../../components/home';
import { AppScreens } from '../../navigation/screens';

const Home = ({
  username,
  incidents = [],
  status = STATUS_TYPES.none,
  getIncidents,
  navigation: { push },
}) => {
  const [promptVisible, setPromptVisible] = useState(false);

  useEffect(() => {
    getIncidents();
  }, []);

  const handleAddIncident = () => push(AppScreens.AddIncident);

  return (
    <HomeComponent
      userName={username}
      incidents={incidents}
      loadStatus={status}
      promptVisible={promptVisible}
      onShowPrompt={() => setPromptVisible(true)}
      onHidePrompt={() => setPromptVisible(false)}
      onAddIncidentPress={handleAddIncident}
    />
  );
};

export default Home;
