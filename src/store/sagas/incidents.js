import { call, put, takeLatest } from 'redux-saga/effects';
import {
  FETCH_INCIDENTS_LIST,
  SUCCESS_INCIDENTS_LIST,
  ERROR_INCIDENTS_LIST,
  REQUEST_INCIDENTS_LIST,
} from '../actions/incidents';
import { obtainIncidents } from '../../api';

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

export { watchGetIncidentsList, getIncidentsList };
