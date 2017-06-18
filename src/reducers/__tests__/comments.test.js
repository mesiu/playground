import * as types from '../../constants/actionTypes';
import reducer, { getCommentsByPerson } from '../comments';

describe('comments reducer', () => {
  it('should return the initial state', () => {
    const initialState = {};

    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle COMMENTS_ADD action', () => {
    const personId = 'luke-skywalker';
    const comment = 'May the force be with you';

    const action = {
      type: types.COMMENTS_ADD,
      personId,
      comment,
    };

    const state = {
      'darth-vader': ['I am your father'],
    };

    const nextState = {
      ...state,
      [personId]: [comment],
    };

    expect(reducer(state, action)).toEqual(nextState);
  });

  describe('getCommentsByPerson()', () => {
    it('should return an array of comments matching a person ID', () => {
      const id = 'luke-skywalker';

      const state = {
        'darth-vader': ['I am your father'],
        'luke-skywalker': ['May the force be with you'],
      };

      const nextState = ['May the force be with you'];

      expect(getCommentsByPerson(state, id)).toEqual(nextState);
    });

    it('should return any empty array if there are no comments matching a person ID', () => {
      const id = 'luke-skywalker';

      const state = {
        'darth-vader': ['I am your father'],
      };

      const nextState = [];

      expect(getCommentsByPerson(state, id)).toEqual(nextState);
    });
  });
});
