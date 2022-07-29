import React from 'react';
import PropTypes from 'prop-types';

const SearchCountry = ({ handleSearch }) => (
  <div>
    <input
      type="text"
      placeholder="Search a Country..."
      onChange={(event) => handleSearch(event)}
    />
  </div>

);

export default SearchCountry;

SearchCountry.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};
