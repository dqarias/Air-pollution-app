import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import PollutionDetail from '../../Components/Pollution/PollutionDetail';
import fetchAirPollution from '../../Services/airPollutionAPI';
import URL_IMAGE from '../../Utils/mapImage';

const Pollution = () => {
  const {
    country, sn, latitude, longitude,
  } = useParams();

  const airPollution = useSelector((state) => state.pollution.pollution);
  const dispatch = useDispatch();

  const coord = {
    latitude,
    longitude,
  };

  const shortCountryName = sn.toLowerCase();

  useEffect(() => {
    dispatch(fetchAirPollution(coord));
  }, []);
  console.log(airPollution);

  return (
    <>
      <h2>{country}</h2>
      {/* <img src={`${URL_IMAGE}/${shortCountryName}/vector.svg`} alt="" /> */}
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
