import React from 'react';
import continentsData from '../../Utils/continentData';
import Continent from '../Continent/Continent';

const Continents = () => (
  <ul className="continents_container">
    {continentsData.map((continent) => (
      <Continent
        key={continent}
        name={continent}
      />
    ))}
  </ul>
);

export default Continents;
