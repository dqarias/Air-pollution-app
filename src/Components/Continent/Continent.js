import React from 'react';
import { useNavigate } from 'react-router-dom';
import URL_IMAGE from '../../Utils/mapImage';

const Continent = ({ name }) => {
  const navigate = useNavigate();
  const handleCountries = () => {
    navigate(`/${name}`);
  };
  const continentName = name.toLowerCase();

  return (
    <li
      onClick={() => handleCountries()}
      aria-hidden="true"
    >
      
        <img src={continentName === 'americas' ? `${URL_IMAGE}/america/vector.svg` : `${URL_IMAGE}/${continentName}/vector.svg` } alt="" />
      <p>{name}</p>
    </li>
  );
};

export default Continent;
