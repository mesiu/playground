import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import VotingContainer from '../../containers/VotingContainer/VotingContainer';
import CommentsContainer from '../../containers/CommentsContainer/CommentsContainer';

import styles from './person.css';

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
      <Link className={styles.link} to="/">← Back</Link>
      <h1 className={styles.title}>
        {person.name}
      </h1>
      <VotingContainer id={person.id} />
      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.term}>Birth year</span>
          {person.birth_year}
        </li>
        <li className={styles.item}>
          <span className={styles.term}>Gender</span>
          {person.gender}
        </li>
        <li className={styles.item}>
          <span className={styles.term}>Height</span>
          {person.height}
        </li>
        <li className={styles.item}>
          <span className={styles.term}>Mass</span>
          {person.mass}
        </li>
        <li className={styles.item}>
          <span className={styles.term}>Eye color</span>
          {person.eye_color}
        </li>
        <li className={styles.item}>
          <span className={styles.term}>Hair color</span>
          {person.hair_color}
        </li>
        <li className={styles.item}>
          <span className={styles.term}>Skin Color</span>
          {person.skin_color}
        </li>
      </ul>
      <CommentsContainer id={person.id} />
    </div>
  );
};

Person.propTypes = propTypes;

export default Person;
