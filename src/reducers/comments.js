import * as types from '../constants/actionTypes';

const comments = (state = {}, action) => {
  if (action.type === types.COMMENTS_ADD) {
    const { personId, comment } = action;
    return {
      ...state,
      [personId]: (state[personId] || []).concat(comment),
    };
  }

  return state;
};

const getCommentsByPerson = (state, id) => {
  return state[id] || [];
};

export { getCommentsByPerson };
export default comments;
