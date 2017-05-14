import { connect } from 'react-redux';
import PostIndex from './post_index';
import { requestAllPost } from '../../actions/post_actions';
import { selectAllPost } from '../../reducers/selectors';

const mapStateToProps = state => {
  return ({
  posts: selectAllPost(state)
  });
};

const mapDispatchToProps = dispatch => ({
  requestAllPost: () => dispatch(requestAllPost())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostIndex);
