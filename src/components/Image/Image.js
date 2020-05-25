import React from 'react';

import ButtonSmall from '../Button/ButtonSmall';

import '../../scss/bem/Image.scss';


const Image = ({ imageSrc }) => {

  const backgroundImageStyles = {
    backgroundImage: `url("https://unsplash.it/400")`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    transformOrigin: 'preserve-3d',
    transform: `translateZ(75px) perspective(200px)`
  };

  const handleClick = () => console.log('Small button clicked!');

  return (
    <div className="image" style={backgroundImageStyles}>
      <div className="image__overlay">
        <ButtonSmall buttonText="Play" onClick={handleClick} extraClasses="button--favourites" />
      </div>
    </div>
  );
};

export default Image;