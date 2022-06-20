import {
  TOGGLE_MODAL,
  LOGIN_MODAL,
  SIGN_UP_MODAL,
  GET_RECEIVED_USER,
} from '../constants';

const initialState = {
  modalType: '',
  modalIsOpen: false,
  user: {},
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
      };
    default: return state;
  }
}
