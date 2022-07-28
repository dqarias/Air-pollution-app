import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchCountries from '../../Services/restCountriesAPI';
import Country from '../../Components/Country/Country';

const Countries = () => {
  const { region } = useParams();

  const countries = useSelector((state) => state.countries.countries);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries(region));
  }, []);
  console.log(countries);

  return (
    <ul>
      {countries.map((country) => (
        <Country
          key={country.name}
          name={country.name}
          population={country.population}
          area={country.area}
          latitude={country.latitude}
          longitude={country.longitude}
          altSpelling={country.altSpelling}
          region={country.region}
        />
      ))}
    </ul>
  );
};

export default Countries;
