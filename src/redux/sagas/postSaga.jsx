import {
  takeEvery,
  // call,
  put,
} from 'redux-saga/effects';
import api from '../../api/api';
import * as actionTypes from '../constants';
import { failedPosts, receivedPosts } from '../action';

function* getPostSaga() {
  try {
    const { data: payload } = yield api.get('/posts');
    yield put(receivedPosts(payload));
  } catch (err) {
    yield put(failedPosts(err.message));
  }
}

export default function* watcherSaga() {
  yield takeEvery(actionTypes.POSTS_REQUESTED, getPostSaga);
}
