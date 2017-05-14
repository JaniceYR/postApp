import React, { Component } from 'react';

class PostShow extends Component {
  constructor (props) {
    super(props);
  }
  componentDidMount() {
    this.props.requestShowPost(this.props.match.params.postId);
  }

  render(){
    return (
      <section>
        <ul>
          <li>
            Title : {this.props.post.title}
          </li>
          <li>
            Body : {this.props.post.body}
          </li>
        </ul>
      </section>
    );
  }
}

export default PostShow;
