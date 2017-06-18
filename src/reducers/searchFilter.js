import * as types from '../constants/actionTypes';

const searchFilter = (state = '', action) => {
  if (action.type === types.FILTER_RESULTS) {
    return action.query;
  }

  return state;
};

const filterResults = (state = [], query) => {
  return state.filter((person) => {
    return person.name.toLowerCase().search(query.toLowerCase()) > -1;
  });
};

export { filterResults };
export default searchFilter;
