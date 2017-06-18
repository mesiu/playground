import filterResults from '../searchFilter';
import * as types from '../../constants/actionTypes';

describe('searchFilter actions', () => {
  it('should create an action when filtering results', () => {
    const query = 'darth';

    const expectedAction = {
      type: types.FILTER_RESULTS,
      query,
    };

    expect(filterResults(query)).toEqual(expectedAction);
  });
});
