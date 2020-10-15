import { STATUS_TYPES } from '../../common/constants';
import {
  FETCH_INCIDENTS_LIST,
  SUCCESS_INCIDENTS_LIST,
  ERROR_INCIDENTS_LIST,
} from '../actions/incidents';

import { createReducer } from '../util';

const initialState = {};

const auth = createReducer(initialState, {
  [FETCH_INCIDENTS_LIST.name](state) {
    return {
      ...state,
      status: STATUS_TYPES.wait,
    };
  },
  [SUCCESS_INCIDENTS_LIST.name](state, { payload: { incidents } }) {
    return {
      ...state,
      status: STATUS_TYPES.success,
      incidents,
    };
  },
  [ERROR_INCIDENTS_LIST.name](state) {
    return {
      ...state,
      status: STATUS_TYPES.error,
    };
  },
});

export default auth;
