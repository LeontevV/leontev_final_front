import {
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import * as actionTypes from '../constants';
import { signUpModal } from '../action';
import signUpUser from '../../api/signUp';

function* signUpSaga() {
  try {
    const { data: payload } = yield call(signUpUser);
    yield put(signUpModal(payload));
  } catch (err) {
    console.log(err);
  }
}

export default function* watcherSaga() {
  yield takeLatest(actionTypes.SIGN_UP_MODAL, signUpSaga);
}
