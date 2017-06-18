import * as types from '../constants/actionTypes';

const commentAdd = (personId, comment) => {
  return {
    type: types.COMMENTS_ADD,
    personId,
    comment,
  };
};

export default commentAdd;
