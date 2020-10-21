import React, { useState } from 'react';
import AddIncidentComponent from '../../components/addIncident';

import { isButtonDisabled, isDifferentSelection, filterItemsByPayloadCode } from './util';

const items = [
  { value: 'item a', _id: '1' },
  { value: 'item b', _id: '2' },
  { value: 'item c', _id: '3' },
  { value: 'item d', _id: '4' },
  { value: 'item e', _id: '5' },
  { value: 'item f', _id: '6' },
  { value: 'item g', _id: '7' },
  { value: 'item h', _id: '8' },
];

const AddIncident = ({ definitions, types, subtypes }) => {
  const [definition, setDefinition] = useState({});
  const [type, setType] = useState({});
  const [subtype, setSubtype] = useState({});
  const [catalogs, setCatalogs] = useState({ myTypes: [], mySubtypes: [] });

  const handleAddPress = () => alert('go');

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
    />
  );
};

export default AddIncident;
