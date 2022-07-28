import React from 'react';

const PollutionDetail = ({ aqi, components }) => (
  <>
    <li>{aqi}</li>
    <li>{components.co}</li>
    <li>{components.nh3}</li>
    <li>{components.no}</li>
    <li>{components.no2}</li>
    <li>{components.o3}</li>
    <li>{components.pm2_5}</li>
    <li>{components.pm10}</li>
    <li>{components.so2}</li>
  </>
);

export default PollutionDetail;
