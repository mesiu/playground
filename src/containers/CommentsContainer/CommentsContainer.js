import { connect } from 'react-redux';

import commentAdd from '../../actions/comments';
import { getCommentsByPerson } from '../../reducers/comments';
import Comments from '../../components/Comments/Comments';

const mapStateToProps = (state, ownProps) => {
  return {
    comments: getCommentsByPerson(state.comments, ownProps.id),
  };
};

export default connect(
  mapStateToProps,
  { commentAdd },
)(Comments);
