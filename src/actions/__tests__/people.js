import * as actions from '../people';
import * as types from '../../constants/actionTypes';

describe('people actions', () => {
  it('should create an action when sending a get people request', () => {
    const expectedAction = {
      type: types.GET_PEOPLE_REQUEST,
    };

    expect(actions.getPeopleRequest()).toEqual(expectedAction);
  });

  it('should create an action when a get people request is successful', () => {
    const response = {
      results: [
        {
          name: 'Luke Skywalker',
        },
      ],
    };

    const expectedAction = {
      type: types.GET_PEOPLE_SUCCESS,
      response,
    };

    expect(actions.getPeopleSuccess(response)).toEqual(expectedAction);
  });

  it('should create an action when a get people request fails', () => {
    const message = 'There was an error';

    const expectedAction = {
      type: types.GET_PEOPLE_FAILURE,
      message,
    };

    expect(actions.getPeopleFailure(message)).toEqual(expectedAction);
  });
});
