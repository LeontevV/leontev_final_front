import {
  GET_USER_REQUESTED_BY_ID,
  GET_USER_REQUEST_BY_TOKEN,
  GET_RECEIVED_USER,
  GET_FAILED_USER,
} from '../constants';

const initialState = {
  isFetching: false,
  user: {},
  error: null,
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_USER_REQUESTED_BY_ID:
      return {
        ...state,
        isFetching: true,
        user: {},
        error: null,
      };
    case GET_USER_REQUEST_BY_TOKEN:
      return {
        ...state,
        isFetching: true,
        user: {},
        error: null,
      };
    case GET_RECEIVED_USER:
      return {
        ...state,
        isFetching: false,
        user: action.payload,
        error: null,
      };
    case GET_FAILED_USER:
      return {
        ...state,
        isFetching: false,
        user: {},
        error: action.error,
      };
    default: return state;
  }
}
