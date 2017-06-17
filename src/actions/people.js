import * as types from '../constants/actionTypes';
import starWarsApi from '../api/starWarsApi';

const getPeopleRequest = () => {
  return {
    type: types.GET_PEOPLE_REQUEST,
  };
};

const getPeopleSuccess = (response) => {
  return {
    type: types.GET_PEOPLE_SUCCESS,
    response,
  };
};

const getPeopleFailure = (message) => {
  return {
    type: types.GET_PEOPLE_FAILURE,
    message,
  };
};

const getPeople = () => {
  return (dispatch) => {
    dispatch(getPeopleRequest());

    return starWarsApi.getPeople()
      .then((response) => {
        dispatch(getPeopleSuccess(response));
      })
      .catch((error) => {
        dispatch(getPeopleFailure(error.message));
      });
  };
};

export { getPeopleRequest, getPeopleSuccess, getPeopleFailure };
export default getPeople;
