import React from 'react';
import PropTypes from 'prop-types';

import styles from './voting.css';

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
    <div className={styles.voting}>
      <div className={styles.buttonGroup}>
        <button className={styles.button} onClick={() => { return actions.voteUp(id); }}>
          +
        </button>
        <span className={styles.votes}>{votes}</span>
        <button className={styles.button} onClick={() => { return actions.voteDown(id); }}>
          -
        </button>
      </div>
      {rating && <p className={styles.rating}>{rating}% upvoted</p>}
    </div>
  );
};

Voting.propTypes = propTypes;

export default Voting;
