import {
  FETCH_INCIDENTS_LIST,
  SUCCESS_INCIDENTS_LIST,
  ERROR_INCIDENTS_LIST,
  SET_INCIDENT_CATALOGS,
} from '../actions/incidents';
import { STATUS_TYPES } from '../../common/constants';
import incidentsReducer from './incidents';

const initialState = {};

describe('Auth reducer tests', () => {
  it('should have status waiting when FETCH_INCIDENTS_LIST was dispatched', () => {
    const action = { type: FETCH_INCIDENTS_LIST.name };
    const reducer = incidentsReducer(initialState, action);
    expect(reducer.status).toEqual(STATUS_TYPES.wait);
  });
  it('should have status error when ERROR_INCIDENTS_LIST was dispatched', () => {
    const action = { type: ERROR_INCIDENTS_LIST.name };
    const reducer = incidentsReducer(initialState, action);
    expect(reducer.status).toEqual(STATUS_TYPES.error);
  });
  it('should have status success when SUCCESS_INCIDENTS_LIST was dispatched', () => {
    const myIncidents = [{}];
    const action = {
      type: SUCCESS_INCIDENTS_LIST.name,
      payload: { incidents: myIncidents },
    };
    const reducer = incidentsReducer(initialState, action);
    expect(reducer.status).toEqual(STATUS_TYPES.success);
    expect(reducer.incidents).toEqual(myIncidents);
  });
  it('should have catalogs when SET_INCIDENT_CATALOGS was dispatched', () => {
    const myCatalogs = {};
    const action = {
      type: SET_INCIDENT_CATALOGS.name,
      payload: { catalogs: myCatalogs },
    };
    const reducer = incidentsReducer(initialState, action);
    expect(reducer.catalogs).toEqual(myCatalogs);
  });
});
