import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import PostShowContainer from './post_show_container';

class PostIndex extends Component {
  constructor (props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
    this.deletePost = this.deletePost.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
    this.changeBody = this.changeBody.bind(this);
    this.submitCreate = this.submitCreate.bind(this);
  }

  componentDidMount() {
    this.props.requestAllPost();
  }

  deletePost(e) {
    this.props.deletePost(e.target.value);
  }

  changeTitle(e){
    this.setState({title: e.target.value});
  }

  changeBody(e){
    this.setState({body: e.target.value});
  }

  submitCreate(e){
    e.preventDefault();
    this.props.createPost(this.state);
    this.props.requestAllPost();
    this.setState({title: "", body: ""});
  }

  render() {
    const posts = this.props.posts;
    return (
      <div>
        <section>
          <h3> Create New Post</h3>
          Title: <input onChange={this.changeTitle} value={this.state.title} />
          body: <input onChange={this.changeBody} value={this.state.body} />
          <button onClick={this.submitCreate}>New Post</button>
        </section>
        <section>
          <ul>
            {posts.map((post, i) => (
              <li key={'post-li-key-' + i}>
                <Link to={`/posts/${post.id}`}>
                {post.title}
                </Link>
                <button onClick={this.deletePost} value={post.id}>Delete Post</button>
              </li>
            ))}
          </ul>
        </section>
        <section>
          <Route path="/posts/:postId"
            component={PostShowContainer} />
        </section>
      </div>
    );
  }
}

export default PostIndex;
