import commentAdd from '../comments';
import * as types from '../../constants/actionTypes';

describe('comments actions', () => {
  it('should create an action when adding a comment', () => {
    const personId = 'luke-skywalker';
    const comment = 'May the force by with you';

    const expectedAction = {
      type: types.COMMENTS_ADD,
      personId,
      comment,
    };

    expect(commentAdd(personId, comment)).toEqual(expectedAction);
  });
});
