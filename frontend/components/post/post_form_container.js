import { connect } from 'react-redux';
import PostForm from './post_form';
import { createPost } from '../../actions/post_actions';

const mapDispatchToProps = dispatch => ({
  createPost: (newPost) => dispatch(createPost(newPost))
  });

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
