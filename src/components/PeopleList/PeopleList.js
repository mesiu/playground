import React from 'react';
import PropTypes from 'prop-types';

import PeopleListItem from './PeopleListItem';
import SearchContainer from '../../containers/SearchContainer/SearchContainer';

import styles from './peopleList.css';

const propTypes = {
  people: PropTypes.array.isRequired,
};

const PeopleList = ({ people }) => {
  return (
    <div>
      <SearchContainer />
      <ul className={styles.list}>
        {people.map((person) => {
          return <PeopleListItem className={styles.listItem} key={person.id} person={person} />;
        })}
      </ul>
    </div>
  );
};

PeopleList.propTypes = propTypes;

export default PeopleList;
