import { merge } from 'lodash';

import { RECEIVE_ALL_POST, RECEIVE_SHOW_POST, REMOVE_POST, RECEIVE_NEW_POST } from '../actions/post_actions';

const initState = {
  id: 0,
  title: "",
  body: ""
};

const PostReducer = (state = initState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_POST:
      return merge({}, action.posts);
    case RECEIVE_SHOW_POST:
      return merge({}, action.post);
    case RECEIVE_NEW_POST:
      newState = merge({}, state);
      newState = merge(newState, action.post);
      return newState;
    case REMOVE_POST:
      newState = merge({}, state);
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  }
};

export default PostReducer;
