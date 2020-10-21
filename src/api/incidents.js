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

const createIncident = async ({
  channel,
  definition,
  type,
  subtype,
  location,
  description,
}) =>
  client.post('https://up-company.dev/dev-sity-incidence/api/v1/incidence/', {
    channel,
    definition,
    type,
    subtype,
    location,
    description,
    date: Date.now(),
  });

export { obtainIncidents, obtainIncidentCatalogs, createIncident };
