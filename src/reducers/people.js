import * as types from '../constants/actionTypes';

const initialState = {
  isFetching: false,
  people: [],
};

const person = (state = {}, action) => {
  switch (action.type) {
    case types.GET_PEOPLE_SUCCESS:
      return {
        ...state,
        id: state.name.toLowerCase().replace(' ', '-'),
        votes: 0,
        votesTotal: 0,
      };
    case types.VOTE_UP:
      return {
        ...state,
        votes: state.votes + 1,
        votesTotal: state.votesTotal + 1,
      };
    case types.VOTE_DOWN:
      return {
        ...state,
        votes: state.votes - 1,
        votesTotal: state.votesTotal + 1,
      };
    default:
      return state;
  }
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
          return person(result, action);
        }),
      };
    case types.GET_PEOPLE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.message,
      };
    case types.VOTE_UP:
    case types.VOTE_DOWN:
      return {
        ...state,
        people: state.people.map((result) => {
          if (result.id !== action.id) {
            return result;
          }

          return person(result, action);
        }),
      };
    default:
      return state;
  }
};

const getPerson = (state = [], id) => {
  return state.find((p) => {
    return p.id === id;
  });
};

const sortByPopularity = (state = []) => {
  return state.sort((a, b) => {
    if (a.votes < b.votes) {
      return 1;
    }

    if (a.votes > b.votes) {
      return -1;
    }

    return 0;
  });
};

export { getPerson, sortByPopularity };
export default people;
