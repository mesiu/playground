import React from 'react';
import PropTypes from 'prop-types';

import CommentForm from './CommentForm';

const propTypes = {
  comments: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  commentAdd: PropTypes.func.isRequired,
};

const Comments = ({ comments, id, commentAdd }) => {
  return (
    <div>
      <h2>Comments</h2>
      <CommentForm id={id} onSubmit={commentAdd} />
      <ul>
        {comments.map((comment, index) => {
          const key = `comment-${index}`;
          return <li key={key}>{comment}</li>;
        })}
      </ul>
    </div>
  );
};

Comments.propTypes = propTypes;

export default Comments;
