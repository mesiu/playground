import { connect } from 'react-redux';

import { filterResults } from '../../reducers/searchFilter';
import { sortByPopularity } from '../../reducers/people';
import PeopleList from '../../components/PeopleList/PeopleList';

const mapStateToProps = (state) => {
  return {
    people: filterResults(sortByPopularity(state.people.people), state.searchFilter),
  };
};

export default connect(
  mapStateToProps,
)(PeopleList);
