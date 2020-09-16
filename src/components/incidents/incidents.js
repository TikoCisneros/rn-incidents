import React from 'react';
import Incident from './incident';
import { IncidentsList, IncidentTitle } from './incidents.styles';

import { TYPOGRAPHY_TYPES } from '../common/typography';

const Incidents = ({ incidents }) => {
  const renderItem = ({ item }) => <Incident {...item} />;

  return (
    <>
      <IncidentTitle type={TYPOGRAPHY_TYPES.HEADING_5}>Incidencias</IncidentTitle>
      <IncidentsList
        data={incidents}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </>
  );
};

export default Incidents;
