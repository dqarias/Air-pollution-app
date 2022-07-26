import React from 'react';

const Continent = ({ name, handleCountries }) => (
  <li
    onClick={() => handleCountries()}
    aria-hidden="true"
  >
    {name}
  </li>
);

export default Continent;
