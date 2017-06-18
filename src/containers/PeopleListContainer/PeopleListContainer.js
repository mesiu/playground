import { connect } from 'react-redux';

import { filterResults } from '../../reducers/searchFilter';
import PeopleList from '../../components/PeopleList/PeopleList';

const mapStateToProps = (state) => {
  return {
    people: filterResults(state.people.people, state.searchFilter),
  };
};

export default connect(
  mapStateToProps,
)(PeopleList);
