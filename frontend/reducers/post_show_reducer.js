import { merge } from 'lodash';
import { RECEIVE_SHOW_POST } from '../actions/post_actions';

const initState = {
  id: 0,
  title: "",
  body: ""
};

const PostShowReducer = (state = initState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SHOW_POST:
      return merge({}, action.postShow);
    default:
      return state;
  }
};

export default PostShowReducer;
