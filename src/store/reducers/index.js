import { combineReducers } from 'redux';
import { LOGOUT } from '../actions/auth';

import auth from './auth';
import incidents from './incidents';

const internalReducers = combineReducers({ auth, incidents });

const rootReducer = (state, action) => {
  if (action && action.type === LOGOUT.name) {
    return internalReducers(undefined, action);
  }
  return internalReducers(state, action);
};

export default rootReducer;
