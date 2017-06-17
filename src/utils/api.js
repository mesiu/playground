const errorHandler = (response) => {
  if (!response.ok) {
    return Promise.reject(new Error(response.statusText));
  }

  return Promise.resolve(response);
};

const responseHandler = (response) => {
  return response.json()
    .then((json) => {
      return Promise.resolve(json);
    })
    .catch(() => {
      return Promise.reject(new Error('Could not parse JSON from response'));
    });
};

export { errorHandler, responseHandler };
