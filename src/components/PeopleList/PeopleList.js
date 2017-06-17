import React from 'react';
import PropTypes from 'prop-types';

import PeopleListItem from './PeopleListItem';

const propTypes = {
  people: PropTypes.array.isRequired,
};

const PeopleList = ({ people }) => {
  return (
    <div>
      <ul>
        {people.map((person) => {
          return <PeopleListItem key={person.id} person={person} />;
        })}
      </ul>
    </div>
  );
};

PeopleList.propTypes = propTypes;

export default PeopleList;
