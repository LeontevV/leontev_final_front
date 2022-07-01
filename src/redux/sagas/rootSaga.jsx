import { all } from 'redux-saga/effects';
import postSaga from './postSaga';
import signUpSaga from './signUpSaga';
import loginSaga from './loginSaga';
import logOutSaga from './logOutSaga';
import tokenUserSaga from './tokenUserSaga';
import idUserSaga from './idUserSaga';

export default function* rootSaga() {
  yield all([
    postSaga(),
    signUpSaga(),
    loginSaga(),
    logOutSaga(),
    tokenUserSaga(),
    idUserSaga(),
  ]);
}
