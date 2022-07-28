import React from 'react';
import { useNavigate } from 'react-router-dom';
import URL_IMAGE from '../../Utils/mapImage';

const Country = ({
  name, population, area, latitude, longitude, region, altSpelling,
}) => {
  const navigate = useNavigate();
  const handleAirPollution = () => {
    navigate(`/${name}/${altSpelling}/${latitude}/${longitude}`);
  };

  const imageCountry = altSpelling.toLowerCase();
  return (
    <li
      onClick={() => handleAirPollution()}
      aria-hidden="true"
    >
      <img src={`${URL_IMAGE}/${imageCountry}/vector.svg` } alt="" />
      <p>{name}</p>
      <p>{population}</p>
      <p>{area}</p>
    </li>
  );
};

export default Country;
