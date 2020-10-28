import React from 'react';
import Incident from './incident';
import ListSkeleton from '../common/skeletons/list';

import { IncidentsList, ListContainer } from './incidents.styles';

import { STATUS_TYPES } from '../../common/constants';

const Incidents = ({ incidents, loadStatus }) => {
  const renderItem = ({ item }) => <Incident {...item} />;

  return (
    <ListContainer>
      <ListSkeleton
        numberOfItems={8}
        isLoading={loadStatus === STATUS_TYPES.wait}>
        <IncidentsList
          data={incidents}
          renderItem={renderItem}
          keyExtractor={(item, index) => `${item.id}-${index}`}
        />
      </ListSkeleton>
    </ListContainer>
  );
};

export default Incidents;
