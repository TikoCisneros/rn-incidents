import { buildIncidentCatalogs } from './util';

const FETCH_INCIDENTS_LIST = {
  action: () => ({ type: FETCH_INCIDENTS_LIST.name }),
  name: 'FETCH_INCIDENTS_LIST',
};

const SUCCESS_INCIDENTS_LIST = {
  action: (incidents) => ({
    type: SUCCESS_INCIDENTS_LIST.name,
    payload: { incidents },
  }),
  name: 'SUCCESS_INCIDENTS_LIST',
};

const ERROR_INCIDENTS_LIST = {
  action: () => ({ type: ERROR_INCIDENTS_LIST.name }),
  name: 'ERROR_INCIDENTS_LIST',
};

const REQUEST_INCIDENTS_LIST = {
  action: () => ({ type: REQUEST_INCIDENTS_LIST.name }),
  name: 'REQUEST_INCIDENTS_LIST',
};

const SET_INCIDENT_CATALOGS = {
  action: (wsCatalogs) => {
    const catalogs = buildIncidentCatalogs(wsCatalogs);

    return {
      type: SET_INCIDENT_CATALOGS.name,
      payload: { catalogs },
    };
  },
  name: 'SET_INCIDENT_CATALOGS',
};

const REQUEST_INCIDENTS_CATALOGS = {
  action: () => ({ type: REQUEST_INCIDENTS_CATALOGS.name }),
  name: 'REQUEST_INCIDENTS_CATALOGS',
};

const REQUEST_ADD_INCIDENT = {
  action: (data, callback) => ({
    type: REQUEST_ADD_INCIDENT.name,
    data,
    callback,
  }),
  name: 'REQUEST_ADD_INCIDENT',
};

export {
  FETCH_INCIDENTS_LIST,
  SUCCESS_INCIDENTS_LIST,
  ERROR_INCIDENTS_LIST,
  REQUEST_INCIDENTS_LIST,
  SET_INCIDENT_CATALOGS,
  REQUEST_INCIDENTS_CATALOGS,
  REQUEST_ADD_INCIDENT,
};
