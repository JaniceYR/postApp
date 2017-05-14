import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

class PostIndex extends Component {
  componentDidMount() {
    this.props.requestAllPost();
  }

  render() {
    const posts = this.props.posts;
    return (
      <section>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              {post.title}

              <button>Delete Post</button>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default PostIndex;
