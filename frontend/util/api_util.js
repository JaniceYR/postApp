export const fetchAllPost = () => {
  return $.ajax({
    method: "GET",
    url: "/api/posts"
  });
};

export const fetchShowPost = (postId) => {
  return $.ajax({
    method: "GET",
    url: `/api/posts/${postId}`
  });
};
