import { combineReducers } from 'redux';
import PostReducer from './post_reducer';
import PostShowReducer from './post_show_reducer';

export default combineReducers({
  post: PostReducer,
  postShow: PostShowReducer
});
