import * as types from '../../constants/actionTypes';
import reducer from '../people';

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
});
