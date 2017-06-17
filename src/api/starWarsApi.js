import { errorHandler, responseHandler } from '../utils/api';

const BASE_API_URL = 'http://swapi.co/api';

const starWarsApi = {
  getPeople: () => {
    return fetch(`${BASE_API_URL}/people/`)
      .then(errorHandler)
      .then(responseHandler);
  },
};

export default starWarsApi;
