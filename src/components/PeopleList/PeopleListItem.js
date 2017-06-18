import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired,
};

const PeopleListItem = ({ person }) => {
  return (
    <li>
      <h2>
        <Link to={`/${person.id}`}>{person.name}</Link>
      </h2>
      <p>{person.votes} vote{person.votes !== 1 ? 's' : ''}</p>
    </li>
  );
};

PeopleListItem.propTypes = propTypes;

export default PeopleListItem;
