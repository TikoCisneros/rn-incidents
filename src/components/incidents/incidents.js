import React from 'react';
import Incident from './incident';
import ListSkeleton from '../common/skeletons/list';

import {
  IncidentsList,
  IncidentTitle,
  ListContainer,
} from './incidents.styles';

import { TYPOGRAPHY_TYPES } from '../common/typography';
import { STATUS_TYPES } from '../../common/constants';

const Incidents = ({ incidents, loadStatus }) => {
  const renderItem = ({ item }) => <Incident {...item} />;

  return (
    <ListContainer>
      <IncidentTitle type={TYPOGRAPHY_TYPES.HEADING_3}>
        Incidencias
      </IncidentTitle>
      <ListSkeleton
        numberOfItems={8}
        isLoading={loadStatus === STATUS_TYPES.wait}>
        <IncidentsList
          data={incidents}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </ListSkeleton>
    </ListContainer>
  );
};

export default Incidents;
