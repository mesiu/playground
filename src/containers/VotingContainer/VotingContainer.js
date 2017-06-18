import { connect } from 'react-redux';

import Voting from '../../components/Voting/Voting';
import { voteUp, voteDown } from '../../actions/voting';
import { getPerson } from '../../reducers/people';

const mapStateToProps = (state, ownProps) => {
  const person = getPerson(state.people.people, ownProps.id);
  return {
    votes: person.votes,
    votesTotal: person.votesTotal,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      voteUp: (id) => {
        dispatch(voteUp(id));
      },
      voteDown: (id) => {
        dispatch(voteDown(id));
      },
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Voting);
