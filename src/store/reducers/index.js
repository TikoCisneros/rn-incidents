import { combineReducers } from 'redux';
import { LOGOUT } from '../actions/auth';

import auth from './auth';

const internalReducers = combineReducers({ auth });

const rootReducer = (state, action) => {
  if (action && action.type === LOGOUT.name) {
    return internalReducers(undefined, action);
  }
  return internalReducers(state, action);
};

export default rootReducer;
