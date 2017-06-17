import React from 'react';
import { Route, Link } from 'react-router-dom';

import PeopleList from '../../components/PeopleList/PeopleList';
import Person from '../../components/Person/Person';

const App = () => {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/luke">Luke</Link>
      </nav>
      <Route exact path="/" component={PeopleList} />
      <Route path="/:person" component={Person} />
    </div>
  );
};

export default App;
