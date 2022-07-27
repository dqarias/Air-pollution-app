import React from 'react';
import { useNavigate } from 'react-router-dom';

const Continent = ({ name }) => {
  const navigate = useNavigate();
  const handleCountries = () => {
    navigate(`/${name}`);
  };

  return (
    <li
      onClick={() => handleCountries()}
      aria-hidden="true"
    >
      {name}
    </li>
  );
};

export default Continent;
