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
export const toggleModal = (payload) => ({
  type: actionTypes.TOGGLE_MODAL,
  payload,
});
export const loginModal = (payload) => ({
  type: actionTypes.LOGIN_MODAL,
  payload,
});

export const receivedAuth = (payload) => ({
  type: actionTypes.GET_RECEIVED_USER,
  payload,
});
export const signUpModal = (payload) => ({
  type: actionTypes.SIGN_UP_MODAL,
  payload,
});
