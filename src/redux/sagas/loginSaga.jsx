import {
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import * as actionTypes from '../constants';
import { receivedAuth, failedAuth } from '../action';
import api from '../../api/api';

function* loginSaga({ payload: value }) {
  try {
    const data = yield call(api.post, '/users/sign_in', { user: value });
    if (data.headers.authorization) {
      localStorage.setItem('token', data.headers.authorization);
    }
    yield put(receivedAuth(data));
  } catch (err) {
    yield put(failedAuth(err.message));
  }
}

export default function* watcherSaga() {
  yield takeLatest(actionTypes.LOGIN_MODAL, loginSaga);
}
