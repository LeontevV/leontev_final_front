import { combineReducers } from 'redux';

import postsReducer from './postsReducer';
import authReducer from './authReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  posts: postsReducer,
  auth: authReducer,
  user: userReducer,
});

export default rootReducer;
