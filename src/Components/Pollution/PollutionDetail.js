/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import GaugeChart from 'react-gauge-chart';

const PollutionDetail = ({ aqi, components }) => (
  <>
    <div>
      <GaugeChart
        id="gauge-chart2"
        nrOfLevels={5}
        percent={aqi / 5}
      />

    </div>
    <div>
      <li>
        <span>Carbon monoxide:</span>
        <span>{components.co}</span>
      </li>
      <li>
        <span>Nitrogen monoxide:</span>
        <span>{components.no}</span>
      </li>
      <li>
        <span>Nitrogen dioxide:</span>
        <span>{components.no2}</span>
      </li>
      <li>
        <span>Ozone:</span>
        <span>{components.o3}</span>
      </li>
      <li>
        <span>Sulphur dioxide:</span>
        <span>{components.so2}</span>
      </li>
      <li>
        <span>Ammonia:</span>
        <span>{components.nh3}</span>
      </li>
      <li>
        <span>Particulates pm2_5:</span>
        <span>{components.pm2_5}</span>
      </li>
      <li>
        <span>Particulates pm10:</span>
        <span>{components.pm10}</span>
      </li>
    </div>

  </>
);

export default PollutionDetail;

PollutionDetail.propTypes = {
  aqi: PropTypes.number.isRequired,
  components: PropTypes.object.isRequired,
};
