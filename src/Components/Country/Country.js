import React from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import URL_IMAGE from '../../Utils/mapImage';

const Country = ({
  name, population, area, latitude, longitude, altSpelling,
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
      <img src={`${URL_IMAGE}/${imageCountry}/vector.svg`} alt="" />
      <p>{name}</p>
      <p>{population}</p>
      <p>{area}</p>
    </li>
  );
};

export default Country;

Country.propTypes = {
  name: PropTypes.string.isRequired,
  population: PropTypes.number.isRequired,
  area: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  altSpelling: PropTypes.string.isRequired,
};
