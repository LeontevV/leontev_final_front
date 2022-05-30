import * as actionTypes from '../constants';
export const getPosts = () => ({
  type: actionTypes.POSTS_REQUESTED
})
export const receivedPosts = (payload) => ({
  type: actionTypes.POSTS_RECEIVED,
  payload,
})
export const failedPosts = (error) => ({
  type: actionTypes.POSTS_FAILED,
  error,
})