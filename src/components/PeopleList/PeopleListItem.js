import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const PeopleListItem = ({ person }) => {
  return (
    <li>
      <h2>
        <Link to={`/${person.id}`}>{person.name}</Link>
      </h2>
    </li>
  );
};

PeopleListItem.propTypes = propTypes;

export default PeopleListItem;
