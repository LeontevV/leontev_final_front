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
    const { data, headers } = yield call(api.post, '/users/sign_in', { user: value });

    if (headers.authorization) {
      localStorage.setItem('token', headers.authorization);
    }
    yield put(receivedAuth(data.message));
  } catch (err) {
    yield put(failedAuth(err.message));
  }
}

export default function* watcherSaga() {
  yield takeLatest(actionTypes.LOGIN_MODAL, loginSaga);
}
