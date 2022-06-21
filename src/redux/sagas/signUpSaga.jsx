import {
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import * as actionTypes from '../constants';
import { receivedAuth, failedAuth } from '../action';
import api from '../../api/api';

function* signUpSaga({ payload: value }) {
  try {
    const data = yield call(api.post, '/users', { user: value });
    yield put(receivedAuth(data));
  } catch (err) {
    yield put(failedAuth(err.message));
  }
}

export default function* watcherSaga() {
  yield takeLatest(actionTypes.SIGN_UP_MODAL, signUpSaga);
}
