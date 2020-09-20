import React from 'react';
import Incident from './incident';

import {
  IncidentsList,
  IncidentTitle,
  ListContainer,
} from './incidents.styles';

import { TYPOGRAPHY_TYPES } from '../common/typography';

const Incidents = ({ incidents }) => {
  const renderItem = ({ item }) => <Incident {...item} />;

  return (
    <ListContainer>
      <IncidentTitle type={TYPOGRAPHY_TYPES.HEADING_3}>
        Incidencias
      </IncidentTitle>
      <IncidentsList
        data={incidents}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </ListContainer>
  );
};

export default Incidents;
