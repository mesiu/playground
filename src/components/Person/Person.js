import React, { PropTypes } from 'react';

const propTypes = {
  match: PropTypes.object.isRequired,
};

const Person = ({ match }) => {
  return (
    <h1>Person: {match.params.person}</h1>
  );
};

Person.propTypes = propTypes;

export default Person;
