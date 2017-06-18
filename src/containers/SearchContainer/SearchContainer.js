import { connect } from 'react-redux';

import filterResults from '../../actions/searchFilter';
import Search from '../../components/Search/Search';

const mapStateToProps = (state) => {
  return {
    value: state.searchFilter,
  };
};

export default connect(
  mapStateToProps,
  { filterResults },
)(Search);
