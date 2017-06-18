import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import VotingContainer from '../../containers/VotingContainer/VotingContainer';
import CommentsContainer from '../../containers/CommentsContainer/CommentsContainer';

const propTypes = {
  person: PropTypes.shape({
    birth_year: PropTypes.string.isRequired,
    eye_color: PropTypes.string.isRequired,
    gender: PropTypes.string.isRequired,
    hair_color: PropTypes.string.isRequired,
    height: PropTypes.string.isRequired,
    mass: PropTypes.string.isRequired,
    skin_color: PropTypes.string.isRequired,
  }).isRequired,
};

const Person = ({ person }) => {
  return (
    <div>
      <Link to="/">Back</Link>
      <h1>{person.name}</h1>
      <VotingContainer id={person.id} />
      <dl>
        <dt>Birth year</dt>
        <dd>{person.birth_year}</dd>
        <dt>Gender</dt>
        <dd>{person.gender}</dd>
        <dt>Height</dt>
        <dd>{person.height}</dd>
        <dt>Mass</dt>
        <dd>{person.mass}</dd>
        <dt>Eye color</dt>
        <dd>{person.eye_color}</dd>
        <dt>Hair color</dt>
        <dd>{person.hair_color}</dd>
        <dt>Skin Color</dt>
        <dd>{person.skin_color}</dd>
      </dl>
      <CommentsContainer id={person.id} />
    </div>
  );
};

Person.propTypes = propTypes;

export default Person;
