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
    const data = yield call(api.delete, '/users/sign_out');
    if (data.status === 200) {
      localStorage.removeItem('token');
    }
  } catch (err) {
    yield put(failedAuth(err.message));
  }
}

export default function* watcherSaga() {
  yield takeLatest(actionTypes.USER_LOGOUT, logOutSaga);
}
