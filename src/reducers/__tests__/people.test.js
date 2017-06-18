import * as types from '../../constants/actionTypes';
import reducer, { getPerson, sortByPopularity } from '../people';

describe('people reducer', () => {
  it('should return the initial state', () => {
    const initialState = {
      isFetching: false,
      people: [],
    };

    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle GET_PEOPLE_REQUEST action', () => {
    const action = {
      type: types.GET_PEOPLE_REQUEST,
    };

    const state = {
      isFetching: false,
    };

    const nextState = {
      isFetching: true,
    };

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('should handle GET_PEOPLE_SUCCESS action', () => {
    const response = {
      results: [
        {
          name: 'Luke Skywalker',
        },
      ],
    };

    const action = {
      type: types.GET_PEOPLE_SUCCESS,
      response,
    };

    const state = {
      isFetching: true,
    };

    const nextState = {
      isFetching: false,
      people: [
        {
          id: 'luke-skywalker',
          name: 'Luke Skywalker',
          votes: 0,
          votesTotal: 0,
        },
      ],
    };

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('should handle GET_PEOPLE_FAILURE action', () => {
    const message = 'There was an error';

    const action = {
      type: types.GET_PEOPLE_FAILURE,
      message,
    };

    const state = {
      isFetching: true,
    };

    const nextState = {
      isFetching: false,
      error: message,
    };

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('should handle VOTE_UP action', () => {
    const action = {
      type: types.VOTE_UP,
      id: 'luke-skywalker',
    };

    const state = {
      people: [
        {
          id: 'darth-vader',
          votes: 0,
          votesTotal: 0,
        },
        {
          id: 'luke-skywalker',
          votes: 0,
          votesTotal: 0,
        },
      ],
    };

    const nextState = {
      people: [
        {
          id: 'darth-vader',
          votes: 0,
          votesTotal: 0,
        },
        {
          id: 'luke-skywalker',
          votes: 1,
          votesTotal: 1,
        },
      ],
    };

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('should handle VOTE_DOWN action', () => {
    const action = {
      type: types.VOTE_DOWN,
      id: 'luke-skywalker',
    };

    const state = {
      people: [
        {
          id: 'darth-vader',
          votes: 0,
          votesTotal: 0,
        },
        {
          id: 'luke-skywalker',
          votes: 0,
          votesTotal: 0,
        },
      ],
    };

    const nextState = {
      people: [
        {
          id: 'darth-vader',
          votes: 0,
          votesTotal: 0,
        },
        {
          id: 'luke-skywalker',
          votes: -1,
          votesTotal: 1,
        },
      ],
    };

    expect(reducer(state, action)).toEqual(nextState);
  });

  describe('getPerson()', () => {
    it('should return a person by their ID', () => {
      const id = 'luke-skywalker';

      const state = [
        {
          id: 'darth-vader',
        },
        {
          id: 'luke-skywalker',
        },
      ];

      const nextState = {
        id: 'luke-skywalker',
      };

      expect(getPerson(state, id)).toEqual(nextState);
    });
  });

  describe('sortByPopularity()', () => {
    it('should sort people by their number of votes', () => {
      const state = [
        {
          id: 'luke-skywalker',
          votes: 2,
        },
        {
          id: 'darth-vader',
          votes: -1,
        },
        {
          id: 'r2-d2',
          votes: 6,
        },
        {
          id: 'c-3po',
          votes: 0,
        },
        {
          id: 'obi-wan-kenobi',
          votes: 0,
        },
      ];

      const nextState = [
        {
          id: 'r2-d2',
          votes: 6,
        },
        {
          id: 'luke-skywalker',
          votes: 2,
        },
        {
          id: 'c-3po',
          votes: 0,
        },
        {
          id: 'obi-wan-kenobi',
          votes: 0,
        },
        {
          id: 'darth-vader',
          votes: -1,
        },
      ];

      expect(sortByPopularity(state)).toEqual(nextState);
    });
  });
});
