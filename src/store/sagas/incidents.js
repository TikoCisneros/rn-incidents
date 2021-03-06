import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_INCIDENTS_LIST,
  SUCCESS_INCIDENTS_LIST,
  ERROR_INCIDENTS_LIST,
  REQUEST_INCIDENTS_LIST,
  SET_INCIDENT_CATALOGS,
  REQUEST_INCIDENTS_CATALOGS,
  REQUEST_ADD_INCIDENT,
} from '../actions/incidents';
import {
  obtainIncidents,
  obtainIncidentCatalogs,
  createIncident,
} from '../../api';
import { isFunction } from '../../common/util';

function* getIncidentsList() {
  try {
    yield put(FETCH_INCIDENTS_LIST.action());

    const { result: incidents } = yield call(obtainIncidents);

    yield put(SUCCESS_INCIDENTS_LIST.action(incidents));
  } catch (_error) {
    yield put(ERROR_INCIDENTS_LIST.action());
  }
}

function* watchGetIncidentsList() {
  yield takeLatest(REQUEST_INCIDENTS_LIST.name, getIncidentsList);
}

function* getIncidentCatalogs() {
  try {
    const { result: catalogs } = yield call(obtainIncidentCatalogs);

    yield put(SET_INCIDENT_CATALOGS.action(catalogs));
    // eslint-disable-next-line no-empty
  } catch (_error) {}
}

function* watchGetIncidentCatalogs() {
  yield takeLatest(REQUEST_INCIDENTS_CATALOGS.name, getIncidentCatalogs);
}

function* addIncident(action) {
  try {
    const {
      data: { definition, type, subtype, description },
      callback,
    } = action;

    yield call(createIncident, { definition, type, subtype, description });

    if (isFunction(callback)) {
      callback();
    }
    // eslint-disable-next-line no-empty
  } catch (_error) {}
}

function* watchAddIncident() {
  yield takeLatest(REQUEST_ADD_INCIDENT.name, addIncident);
}

export {
  watchGetIncidentsList,
  getIncidentsList,
  watchGetIncidentCatalogs,
  getIncidentCatalogs,
  watchAddIncident,
  addIncident,
};
