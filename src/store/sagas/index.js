import { all } from 'redux-saga/effects';
import { watchLastDoLogin } from './auth';
import { watchGetIncidentsList } from './incidents';

export default function* rootSaga() {
  yield all([watchLastDoLogin(), watchGetIncidentsList()]);
}
