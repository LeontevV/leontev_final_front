import {
  TOGGLE_MODAL,
  LOGIN_MODAL,
  SIGN_UP_MODAL,
  GET_RECEIVED_USER,
  GET_USER_FAILED,
} from '../constants';

const initialState = {
  modalType: '',
  modalIsOpen: false,
  user: {},
  error: null,
};

export default function authReducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        modalIsOpen: action.payload.status,
        modalType: action.payload.type,
      };
    case LOGIN_MODAL:
      return {
        ...state,
        modalType: 'login',
      };
    case SIGN_UP_MODAL:
      return {
        ...state,
        modalType: 'signUp',
      };
    case GET_RECEIVED_USER:
      return {
        ...state,
        user: state.payload,
        modalIsOpen: false,
      };
    case GET_USER_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default: return state;
  }
}
