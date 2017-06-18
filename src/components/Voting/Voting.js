import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  actions: PropTypes.shape({
    voteDown: PropTypes.func.isRequired,
    voteUp: PropTypes.func.isRequired,
  }).isRequired,
  id: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  votesTotal: PropTypes.number.isRequired,
};

const Voting = ({ actions, id, votes, votesTotal }) => {
  const rating = votes > 0 ? ((votes / votesTotal) * 100).toFixed(2) : null;
  return (
    <div>
      <button onClick={() => { return actions.voteUp(id); }}>+</button>
      <span>{votes}</span>
      <button onClick={() => { return actions.voteDown(id); }}>-</button>
      {rating && <p>{rating}% upvoted</p>}
    </div>
  );
};

Voting.propTypes = propTypes;

export default Voting;
