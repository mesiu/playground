import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  people: [],
};

const people = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_PEOPLE_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case types.GET_PEOPLE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        people: action.response.results.map((result) => {
          const id = result.name.toLowerCase().replace(' ', '-');
          return {
            ...result,
            id,
          };
        }),
      };
    case types.GET_PEOPLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.message,
      };
    default:
      return state;
  }
};

const getPerson = (state = [], id) => {
  return state.find((person) => {
    return person.id === id;
  });
};

export { getPerson };
export default people;
