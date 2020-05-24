import React from 'react';

import ButtonSmall from '../Button/ButtonSmall';

import '../../scss/bem/Image.scss';

const backgroundImageStyles = {
  backgroundImage: `url("https://unsplash.it/190")`
};

const Image = ({ imageSrc }) => {

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