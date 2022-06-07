import * as actionTypes from '../constants';

export const getPosts = () => ({
  type: actionTypes.POSTS_REQUESTED,
});
export const receivedPosts = (payload) => ({
  type: actionTypes.POSTS_RECEIVED,
  payload,
});
export const failedPosts = (error) => ({
  type: actionTypes.POSTS_FAILED,
  error,
});
export const toggleModal = (payload) => ({
  type: actionTypes.TOGGLE_MODAL,
  payload,
});
export const loginModal = (payload) => ({
  type: actionTypes.LOGIN_MODAL,
  payload,
});
export const signInModal = (payload) => ({
  type: actionTypes.SIGN_UP_MODAL,
  payload,
});
