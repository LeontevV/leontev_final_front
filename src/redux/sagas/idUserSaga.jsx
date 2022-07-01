import {
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import * as actionTypes from '../constants';
import { failedUser, receivedUser } from '../action';
import api from '../../api/api';

function* idUserSaga({ payload }) {
  try {
    const { data } = yield call(api.get, `/users/${payload}`);
    yield put(receivedUser(data));
  } catch (err) {
    yield put(failedUser(err.message));
  }
}

export default function* watcherSaga() {
  yield takeLatest(actionTypes.GET_USER_REQUESTED_BY_ID, idUserSaga);
}
