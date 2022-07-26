import React from 'react';
import continentsData from '../../Utils/continentData';
import Continent from '../Continent/Continent';

const Continents = () => {
  const handleCountries = () => {
    console.log('click');
  };
  return (
    <ul>
      {continentsData.map((continent) => (
        <Continent
          key={continent}
          name={continent}
          handleCountries={handleCountries}
        />
      ))}
    </ul>
  );
};

export default Continents;
