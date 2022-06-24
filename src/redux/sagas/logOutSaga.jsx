import {
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import * as actionTypes from '../constants';
import { failedAuth } from '../action';
import api from '../../api/api';

function* logOutSaga() {
  try {
    yield call(api.delete, '/users/sign_out');
  } catch (err) {
    yield put(failedAuth(err.message));
  } finally { localStorage.removeItem('token'); }
}

export default function* watcherSaga() {
  yield takeLatest(actionTypes.USER_LOGOUT, logOutSaga);
}
