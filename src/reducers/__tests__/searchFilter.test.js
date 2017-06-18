import * as types from '../../constants/actionTypes';
import reducer, { filterResults } from '../searchFilter';

describe('searchFilter reducer', () => {
  it('should return the initial state', () => {
    const initialState = '';

    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('should handle FILTER_RESULTS action', () => {
    const query = 'darth';

    const action = {
      type: types.FILTER_RESULTS,
      query,
    };

    const state = '';

    const nextState = query;

    expect(reducer(state, action)).toEqual(nextState);
  });

  it('should handle filtering results against a query', () => {
    const query = 'darth';

    const state = [
      {
        name: 'Darth Vader',
      },
      {
        name: 'Luke Skywalker',
      },
    ];

    const nextState = [
      {
        name: 'Darth Vader',
      },
    ];

    expect(filterResults(state, query)).toEqual(nextState);
  });
});
