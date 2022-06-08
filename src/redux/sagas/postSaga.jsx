import {
  takeLatest,
  put,
  call,
} from 'redux-saga/effects';

import * as actionTypes from '../constants';
import { failedPosts, receivedPosts } from '../action';
import getPostsRequest from '../../api/getPostsRequest';

function* getPostSaga() {
  try {
    const { data: payload } = yield call(getPostsRequest);
    yield put(receivedPosts(payload));
  } catch (err) {
    yield put(failedPosts(err.message));
  }
}

export default function* watcherSaga() {
  yield takeLatest(actionTypes.GET_POST_REQUEST, getPostSaga);
}
