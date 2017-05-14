import { merge } from 'lodash';

import { RECEIVE_ALL_POST, RECEIVE_SHOW_POST } from '../actions/post_actions';

const initState = {
  id: 0,
  title: "",
  body: ""
};

const PostReducer = (state = initState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ALL_POST:
      return merge({}, action.posts);
    case RECEIVE_SHOW_POST:
      return merge({}, action.post);
    default:
      return state;
  }
};

export default PostReducer;
