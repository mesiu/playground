import { combineReducers } from 'redux';

import people from './people';
import searchFilter from './searchFilter';

const rootReducer = combineReducers({
  people,
  searchFilter,
});

export default rootReducer;
