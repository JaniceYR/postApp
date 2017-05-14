import * as APIUtil from '../util/api_util';

export const RECEIVE_ALL_POST = "RECEIVE_ALL_POST";
export const RECEIVE_SHOW_POST = "RECEIVE_SHOW_POST";
export const REMOVE_POST = "REMOVE_POST";

// Index Page, Show all Posts
export const receiveAllPost = posts => ({
  type: RECEIVE_ALL_POST,
  posts
});

export const requestAllPost = () => (dispatch) => {
  return APIUtil.fetchAllPost()
    .then(posts => dispatch(receiveAllPost(posts)));
};

// Index Page, Delete post using button
export const removePost = post => ({
  type: REMOVE_POST,
  post
});

export const deletePost = (postId) => (dispatch) => {
  return APIUtil.deletePost(postId)
    .then((post) => dispatch(removePost(post)));
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
