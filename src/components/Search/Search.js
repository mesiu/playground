import React from 'react';
import PropTypes from 'prop-types';

import styles from './search.css';

const propTypes = {
  filterResults: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

const Search = ({ filterResults, value }) => {
  return (
    <div>
      <input
        className={styles.input}
        name="search"
        onChange={(e) => { return filterResults(e.target.value); }}
        placeholder="Filter characters"
        type="text"
        value={value}
      />
    </div>
  );
};

Search.propTypes = propTypes;

export default Search;
