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

export {
  FETCH_INCIDENTS_LIST,
  SUCCESS_INCIDENTS_LIST,
  ERROR_INCIDENTS_LIST,
  REQUEST_INCIDENTS_LIST,
};
