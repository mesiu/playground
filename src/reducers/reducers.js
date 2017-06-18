import { combineReducers } from 'redux';

import people from './people';
import searchFilter from './searchFilter';
import comments from './comments';

const rootReducer = combineReducers({
  people,
  searchFilter,
  comments,
});

export default rootReducer;
