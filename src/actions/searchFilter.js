import * as types from '../constants/actionTypes';

const filterResults = (query) => {
  return {
    type: types.FILTER_RESULTS,
    query,
  };
};

export default filterResults;
