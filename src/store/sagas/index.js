import { all } from 'redux-saga/effects';
import { watchLastDoLogin } from './auth';

export default function* rootSaga() {
  yield all([watchLastDoLogin()]);
}
