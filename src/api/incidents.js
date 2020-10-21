/* eslint-disable max-len */
import client from './client';

const obtainIncidents = async () =>
  client.get(
    'https://up-company.dev/dev-sity-incidence/api/v1/incidence/?sort=-1&sortBy=date',
  );

const obtainIncidentCatalogs = async () =>
  client.get(
    'https://up-company.dev/dev-up-catalog/api/v1/catalog/find?names=incidence_type,incidence_chanel,incidence_subtype,incidence_definition',
  );

const createIncident = async ({ definition, type, subtype, description }) =>
  client.post('https://up-company.dev/dev-sity-incidence/api/v1/incidence/', {
    channel: {
      _id: 'd5188606-b9f9-4152-97cd-20337f0d5fc4',
      value: 'SISTEMA WEB',
    },
    definition,
    type,
    subtype,
    description,
    location: {
      type: 'Point',
      coordinates: [-78.12815690807957, 0.36530902833104845],
    },
    date: Date.now(),
  });

export { obtainIncidents, obtainIncidentCatalogs, createIncident };
