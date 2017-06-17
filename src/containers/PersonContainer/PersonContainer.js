import { connect } from 'react-redux';
import { getPerson } from '../../reducers/people';

import Person from '../../components/Person/Person';

const mapStateToProps = (state, ownProps) => {
  const { people } = state.people;
  const { id } = ownProps.match.params;

  return {
    person: getPerson(people, id),
  };
};

export default connect(
  mapStateToProps,
)(Person);
