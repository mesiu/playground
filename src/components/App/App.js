import React from 'react';
import { Route } from 'react-router-dom';

import PeopleListContainer from '../../containers/PeopleListContainer/PeopleListContainer';
import PersonContainer from '../../containers/PersonContainer/PersonContainer';

import styles from './app.css';

const App = () => {
  return (
    <div className={styles.container}>
      <Route exact path="/" component={PeopleListContainer} />
      <Route path="/:id" component={PersonContainer} />
    </div>
  );
};

export default App;
