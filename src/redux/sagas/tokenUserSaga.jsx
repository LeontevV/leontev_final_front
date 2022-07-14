import {
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import * as actionTypes from '../constants';
import { failedUser, receivedUser } from '../action';
import api from '../../api/api';

function* tokenUserSaga() {
  try {
    const { data } = yield call(api.get, '/member-data');
    yield put(receivedUser(data));
  } catch (err) {
    yield put(failedUser(err.message));
  }
}

export default function* watherSaga() {
  yield takeLatest(actionTypes.GET_USER_REQUEST_BY_TOKEN, tokenUserSaga);
}
