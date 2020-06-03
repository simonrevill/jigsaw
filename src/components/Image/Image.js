import React from 'react';

import ButtonSmall from '../Button/ButtonSmall';

import '../../scss/bem/Image.scss';


const Image = ({ imageSrc, imageName }) => {

  const backgroundImageStyles = {
    backgroundImage: `url("${imageSrc}")`,
    backgroundSize: 'cover',
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
        <p className="image__name">{imageName}</p>
      </div>
    </div>
  );
};

export default Image;