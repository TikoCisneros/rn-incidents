import client from './client';

const obtainIncidents = async () =>
  client.get(
    'https://up-company.dev/dev-sity-incidence/api/v1/incidence/?sort=-1&sortBy=date',
  );

// eslint-disable-next-line import/prefer-default-export
export { obtainIncidents };
