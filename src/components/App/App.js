import React from 'react';
import { Route } from 'react-router-dom';

import PeopleListContainer from '../../containers/PeopleListContainer/PeopleListContainer';
import PersonContainer from '../../containers/PersonContainer/PersonContainer';

const App = () => {
  return (
    <div>
      <Route exact path="/" component={PeopleListContainer} />
      <Route path="/:id" component={PersonContainer} />
    </div>
  );
};

export default App;
