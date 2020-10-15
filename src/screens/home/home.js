import React, { useState, useEffect } from 'react';
import { STATUS_TYPES } from '../../common/constants';
import HomeComponent from '../../components/home';

const Home = ({
  username,
  incidents = [],
  status = STATUS_TYPES.none,
  getIncidents,
}) => {
  const [promptVisible, setPromptVisible] = useState(false);

  useEffect(() => {
    const getIncidentsList = () => getIncidents();

    getIncidentsList();
  }, []);

  return (
    <HomeComponent
      userName={username}
      incidents={incidents}
      loadStatus={status}
      promptVisible={promptVisible}
      onShowPrompt={() => setPromptVisible(true)}
      onHidePrompt={() => setPromptVisible(false)}
      onAddIncidentPress={() => setPromptVisible(true)}
    />
  );
};

export default Home;
