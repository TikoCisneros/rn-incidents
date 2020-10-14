import { call, put, takeLatest } from 'redux-saga/effects';
import { isFunction } from '../../common/util';
import {
  REQUEST_AUTHENTICATE_USER,
  FETCH_LOGIN,
  SUCCESS_LOGIN,
  ERROR_LOGIN,
} from '../actions/auth';
import { login } from '../../api';
import client from '../../api/client';

function* doLogin(action) {
  try {
    const {
      data: { username, password },
      callback,
    } = action;

    yield put(FETCH_LOGIN.action());

    const { session_id: sessionId, token } = yield call(login, {
      username,
      password,
    });

    const authorization = `Bearer ${token}`;
    client.modifyHeaders({
      post: { authorization },
      get: { authorization },
      put: { authorization },
    });

    yield put(SUCCESS_LOGIN.action(username, sessionId));

    if (isFunction(callback)) {
      callback();
    }
  } catch (_error) {
    put(ERROR_LOGIN.action());
  }
}

function* watchLastDoLogin() {
  yield takeLatest(REQUEST_AUTHENTICATE_USER.name, doLogin);
}

export { watchLastDoLogin, doLogin };
