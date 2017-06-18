import * as types from '../constants/actionTypes';

const voteUp = (id) => {
  return {
    type: types.VOTE_UP,
    id,
  };
};

const voteDown = (id) => {
  return {
    type: types.VOTE_DOWN,
    id,
  };
};

export { voteUp, voteDown };
