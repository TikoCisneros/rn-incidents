const LOGOUT = {
  name: 'LOGOUT',
};

const FETCH_LOGIN = {
  action: () => ({ type: FETCH_LOGIN.name }),
  name: 'FETCH_LOGIN',
};

const SUCCESS_LOGIN = {
  action: (username, sessionId) => ({
    type: SUCCESS_LOGIN.name,
    payload: { username, sessionId },
  }),
  name: 'SUCCESS_LOGIN',
};

const ERROR_LOGIN = {
  action: () => ({ type: ERROR_LOGIN.name }),
  name: 'ERROR_LOGIN',
};

const REQUEST_AUTHENTICATE_USER = {
  action: (data, callback) => ({
    type: REQUEST_AUTHENTICATE_USER.name,
    data,
    callback,
  }),
  name: 'REQUEST_AUTHENTICATE_USER',
};

export {
  LOGOUT,
  FETCH_LOGIN,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
  REQUEST_AUTHENTICATE_USER,
};
