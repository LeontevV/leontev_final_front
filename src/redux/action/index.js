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
export const signUpModal = (payload) => ({
  type: actionTypes.SIGN_UP_MODAL,
  payload,
});
export const receivedAuth = (payload) => ({
  type: actionTypes.GET_RECEIVED_AUTH,
  payload,
});
export const failedAuth = (payload) => ({
  type: actionTypes.GET_USER_FAILED,
  payload,
});
export const logOut = (payload) => ({
  type: actionTypes.USER_LOGOUT,
  payload,
});

export const getUserById = (payload) => ({
  type: actionTypes.GET_USER_REQUESTED_BY_ID,
  payload,
});
export const getUserByToken = (payload) => ({
  type: actionTypes.GET_USER_REQUEST_BY_TOKEN,
  payload,
});
export const receivedUser = (payload) => ({
  type: actionTypes.GET_RECEIVED_USER,
  payload,
});
export const failedUser = (payload) => ({
  type: actionTypes.GET_FAILED_USER,
  payload,
});
