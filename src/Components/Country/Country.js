import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = ({
  name, population, area, latitude, longitude, region, altSpelling,
}) => {
  const navigate = useNavigate();
  const handleAirPollution = () => {
    navigate(`/${name}/${altSpelling}/${latitude}/${longitude}`);
  };
  return (
    <li
      onClick={() => handleAirPollution()}
      aria-hidden="true"
    >
      <p>{name}</p>
      <p>{population}</p>
      <p>{area}</p>
    </li>
  );
};

export default Country;
