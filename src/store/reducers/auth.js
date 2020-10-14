import { STATUS_TYPES } from '../../common/constants';
import { FETCH_LOGIN, SUCCESS_LOGIN, ERROR_LOGIN } from '../actions/auth';

import { createReducer } from '../util';

const initialState = {};

const auth = createReducer(initialState, {
  [FETCH_LOGIN.name](state) {
    return {
      ...state,
      loginStatus: STATUS_TYPES.wait,
    };
  },
  [SUCCESS_LOGIN.name](state, { payload: { username, sessionId } }) {
    return {
      ...state,
      loginStatus: STATUS_TYPES.success,
      username,
      sessionId,
    };
  },
  [ERROR_LOGIN.name](state) {
    return {
      ...state,
      loginStatus: STATUS_TYPES.error,
    };
  },
});

export default auth;
