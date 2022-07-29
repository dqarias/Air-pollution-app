import React from 'react';
import cover from '../../Assets/Img/cover1.jpg';

const Hero = () => (
  <>
    <div className="hero__container">
      <img
        src={cover}
        alt="air pollution cover"
        className="hero__cover-image"
      />
      <p className="hero__cover-text">Air Pollution App</p>
    </div>
    <div>
      <p className="hero__continent-title">Choose a Continent :</p>
    </div>
  </>

);

export default Hero;
