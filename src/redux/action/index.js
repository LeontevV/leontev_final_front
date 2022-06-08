import * as actionTypes from '../constants';

export const getPosts = () => ({
  type: actionTypes.GET_POST_REQUEST,
});
export const receivedPosts = (payload) => ({
  type: actionTypes.GET_POST_SUCCESS,
  payload,
});
export const failedPosts = (error) => ({
  type: actionTypes.GET_POST_FAILED,
  error,
});
