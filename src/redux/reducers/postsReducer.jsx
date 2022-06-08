import {
  GET_POST_REQUEST,
  GET_POST_SUCCESS,
  GET_POST_FAILED,
} from '../constants';

const initialState = {
  posts: [],
  isFetching: false,
  error: null,
};

export default function postsReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_POST_REQUEST:
      return {
        ...state,
        isFetching: true,
        posts: [],
        error: null,
      };
    case GET_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        posts: action.payload,
        error: null,
      };
    case GET_POST_FAILED:
      return {
        ...state,
        isFetching: false,
        posts: [],
        error: action.error,
      };
    default: return state;
  }
}
