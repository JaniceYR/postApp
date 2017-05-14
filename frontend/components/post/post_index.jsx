import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PostFormContainer from './post_form_container';

class PostIndex extends Component {
  constructor (props) {
    super(props);
    this.deletePost = this.deletePost.bind(this);
  }

  componentDidMount() {
    this.props.requestAllPost();
  }

  deletePost(e) {
    this.props.deletePost(e.target.value);
  }

  render() {
    const posts = this.props.posts;
    return (
      <div>
        <ul>
          {posts.map((post, i) => (
            <li key={'post-li-key-' + i}>
              {post.title}
              <button onClick={this.deletePost} value={post.id}>Delete Post</button>
            </li>
          ))}
        </ul>
        <PostFormContainer />
      </div>
    );
  }
}

export default PostIndex;
