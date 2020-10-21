import React, { useState } from 'react';
import AddIncidentComponent from '../../components/addIncident';

import {
  isButtonDisabled,
  isDifferentSelection,
  filterItemsByPayloadCode,
} from './util';

const AddIncident = ({
  definitions,
  types,
  subtypes,
  addNewIncident,
  getIncidents,
  navigation: { goBack },
}) => {
  const [definition, setDefinition] = useState({});
  const [type, setType] = useState({});
  const [subtype, setSubtype] = useState({});
  const [catalogs, setCatalogs] = useState({ myTypes: [], mySubtypes: [] });
  const [description, setDescription] = useState('');

  const handleSuccessAddIncident = () => {
    goBack();
    getIncidents();
  };

  const handleAddPress = () =>
    addNewIncident(
      { definition, type, subtype, description },
      handleSuccessAddIncident,
    );

  const handleDefinitionPress = (item) => {
    const isDifferentValue = isDifferentSelection(definition, item);

    if (isDifferentValue) {
      setDefinition(item);
      setType({});
      setSubtype({});
      setCatalogs({
        myTypes: filterItemsByPayloadCode(types, item.value),
        mySubtypes: [],
      });
    }
  };

  const handleTypePress = (item) => {
    const isDifferentValue = isDifferentSelection(type, item);

    if (isDifferentValue) {
      setType(item);
      setSubtype({});
      setCatalogs({
        ...catalogs,
        mySubtypes: filterItemsByPayloadCode(subtypes, item.value),
      });
    }
  };

  const handleDescriptionChange = (value) => setDescription(value);

  return (
    <AddIncidentComponent
      onAddPress={handleAddPress}
      isButtonDisabled={isButtonDisabled(definition, type, subtype)}
      definitionValue={definition}
      definitionItems={definitions}
      onDefinitionPress={handleDefinitionPress}
      typeValue={type}
      typeItems={catalogs.myTypes}
      onTypePress={handleTypePress}
      subtypeValue={subtype}
      subtypeItems={catalogs.mySubtypes}
      onSubtypePress={(item) => setSubtype(item)}
      descriptionValue={description}
      onDescriptionChange={handleDescriptionChange}
    />
  );
};

export default AddIncident;
