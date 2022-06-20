import {
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import * as actionTypes from '../constants';
import { receivedAuth } from '../action';
import api from '../../api/api';

function* loginSaga({ payload: value }) {
  try {
    console.log(value);
    const data = yield call(api.post, '/users/sign_in', value);
    console.log(data);
    yield put(receivedAuth(data));
  } catch (err) {
    console.log(err);
  }
}

export default function* watcherSaga() {
  yield takeLatest(actionTypes.LOGIN_MODAL, loginSaga);
}
