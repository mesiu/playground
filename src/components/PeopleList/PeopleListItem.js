import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './peopleListItem.css';

const propTypes = {
  person: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
  }).isRequired,
};

const PeopleListItem = ({ person }) => {
  return (
    <li className={styles.item}>
      <Link className={styles.link} to={`/${person.id}`}>
        <h2 className={styles.title}>{person.name}</h2>
        <p className={styles.details}>{person.votes} vote{person.votes !== 1 ? 's' : ''}</p>
      </Link>
    </li>
  );
};

PeopleListItem.propTypes = propTypes;

export default PeopleListItem;
