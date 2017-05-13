import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POST = "RECEIVE_ALL_POST";
export const RECEIVE_SHOW_POST = "RECEIVE_SHOW_POST";

// Index Page, Show all Posts
export const receiveAllPost = posts => ({
  type: RECEIVE_ALL_POST,
  posts
});

export const requestAllPost = () => (dispatch) => {
  return APIUtil.fetchAllPost()
    .then(post => dispatch(receiveAllPost(post)));
};

// Show Page, Show 1 Post with details
export const receiveShowPost = post => ({
  type: RECEIVE_SHOW_POST,
  post
});

export const requestShowPost = (postId) => (dispatch) => {
  return APIUtil.fetchShowPost(postId).then(post => {
    dispatch(receiveShowPost(post));
  });
};
