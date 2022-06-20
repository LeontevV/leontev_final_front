import { all } from 'redux-saga/effects';
import postSaga from './postSaga';
import signUpSaga from './signUpSaga';
import loginSaga from './loginSaga';

export default function* rootSaga() {
  yield all([
    postSaga(),
    signUpSaga(),
    loginSaga(),
  ]);
}
