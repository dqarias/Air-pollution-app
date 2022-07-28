import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PollutionDetail from '../../Components/Pollution/PollutionDetail';
import fetchAirPollution from '../../Services/airPollutionAPI';

const Pollution = () => {
  const {
    country, latitude, longitude,
  } = useParams();

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
    <>
      <h2 className="pollution__details-country">
        {country}
      </h2>
      <ul>
        {airPollution.map((pollution) => (
          <PollutionDetail
            key={country}
            aqi={pollution.aqi}
            components={pollution.components}
          />
        ))}
      </ul>
    </>
  );
};

export default Pollution;
