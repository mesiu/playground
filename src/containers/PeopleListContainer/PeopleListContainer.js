import { connect } from 'react-redux';

import PeopleList from '../../components/PeopleList/PeopleList';

const mapStateToProps = (state) => {
  return {
    people: state.people.people,
  };
};

export default connect(
  mapStateToProps,
)(PeopleList);
