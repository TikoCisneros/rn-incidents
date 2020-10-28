import React, { useEffect } from 'react';
import { STATUS_TYPES } from '../../common/constants';
import HomeComponent from '../../components/home';
import { IncidentsScreen } from '../../navigation/screens';

const Home = ({
  incidents = [],
  status = STATUS_TYPES.none,
  getIncidents,
  navigation: { push },
}) => {
  useEffect(() => {
    getIncidents();
  }, []);

  const handleAddIncident = () => push(IncidentsScreen.AddIncident);

  return (
    <HomeComponent
      incidents={incidents}
      loadStatus={status}
      onAddIncidentPress={handleAddIncident}
    />
  );
};

export default Home;
