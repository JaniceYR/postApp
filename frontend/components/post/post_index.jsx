import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

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
      </div>
    );
  }
}

export default PostIndex;
