import { connect } from 'react-redux';
import PostShow from './post_show';
import { requestShowPost } from '../../actions/post_actions';

const mapStateToProps = state => {
  return ({
  post: state.postShow
  });
};

const mapDispatchToProps = dispatch => ({
  requestShowPost: (postId) => dispatch(requestShowPost(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostShow);
