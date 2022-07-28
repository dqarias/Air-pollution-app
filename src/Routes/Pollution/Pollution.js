import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchAirPollution from '../../Services/airPollutionAPI';

const Pollution = () => {
  const { country, latitude, longitude } = useParams();

  const airPollution = useSelector((state) => state.pollution.pollution);
  const dispatch = useDispatch();

  const coord = {
    latitude,
    longitude,
  };

  useEffect(() => {
    dispatch(fetchAirPollution(coord));
  }, []);
  console.log(airPollution);

  return (
    <div>pollution</div>
  );
};

export default Pollution;
