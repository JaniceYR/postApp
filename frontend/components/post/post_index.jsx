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
    console.log(e.target.value);
  }

  render() {
    const posts = this.props.posts;
    return (
      <section>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.title}
              <button onClick={this.deletePost} value={post.id}>Delete Post</button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default PostIndex;
