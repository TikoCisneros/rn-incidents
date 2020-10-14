import { FETCH_LOGIN, SUCCESS_LOGIN, ERROR_LOGIN } from '../actions/auth';
import { STATUS_TYPES } from '../../common/constants';
import authReducer from './auth';

const initialState = {};

describe('Auth reducer tests', () => {
  it('should have loginStatus waiting when FETCH_LOGIN was dispatched', () => {
    const action = { type: FETCH_LOGIN.name };
    const reducer = authReducer(initialState, action);
    expect(reducer.loginStatus).toEqual(STATUS_TYPES.wait);
  });
  it('should have loginStatus error when ERROR_LOGIN was dispatched', () => {
    const action = { type: ERROR_LOGIN.name };
    const reducer = authReducer(initialState, action);
    expect(reducer.loginStatus).toEqual(STATUS_TYPES.error);
  });
  it('should have loginStatus success when SUCCESS_LOGIN was dispatched', () => {
    const myUsername = 'user123';
    const mySessionId = 'session123';
    const action = {
      type: SUCCESS_LOGIN.name,
      payload: { username: myUsername, sessionId: mySessionId },
    };
    const reducer = authReducer(initialState, action);
    expect(reducer.loginStatus).toEqual(STATUS_TYPES.success);
    expect(reducer.username).toEqual(myUsername);
    expect(reducer.sessionId).toEqual(mySessionId);
  });
});
